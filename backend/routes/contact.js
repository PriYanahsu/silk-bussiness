const express = require('express');
const Contact = require('../models/Contact');
const { auth, requireOwner } = require('../middleware/auth');

const router = express.Router();

// Submit contact form (public)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message, inquiryType } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: 'Name, email, subject, and message are required' 
      });
    }

    // Create contact inquiry
    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
      inquiryType: inquiryType || 'general'
    });

    await contact.save();

    res.status(201).json({
      message: 'Your message has been sent successfully. We will get back to you soon!',
      contactId: contact._id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all contact inquiries (owner only)
router.get('/', auth, requireOwner, async (req, res) => {
  try {
    const { page = 1, limit = 20, status, inquiryType } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const filter = {};
    if (status) filter.status = status;
    if (inquiryType) filter.inquiryType = inquiryType;

    const contacts = await Contact.find(filter)
      .populate('assignedTo', 'username email')
      .populate('response.respondedBy', 'username email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Contact.countDocuments(filter);

    res.json({
      contacts,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        totalContacts: total
      }
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single contact inquiry (owner only)
router.get('/:id', auth, requireOwner, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
      .populate('assignedTo', 'username email')
      .populate('response.respondedBy', 'username email');

    if (!contact) {
      return res.status(404).json({ message: 'Contact inquiry not found' });
    }

    res.json(contact);
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update contact status (owner only)
router.patch('/:id/status', auth, requireOwner, async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'read', 'replied', 'closed'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ message: 'Contact inquiry not found' });
    }

    res.json({
      message: 'Contact status updated successfully',
      contact
    });
  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Respond to contact inquiry (owner only)
router.post('/:id/respond', auth, requireOwner, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Response message is required' });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        status: 'replied',
        response: {
          message,
          respondedBy: req.user._id,
          respondedAt: new Date()
        }
      },
      { new: true }
    ).populate('response.respondedBy', 'username email');

    if (!contact) {
      return res.status(404).json({ message: 'Contact inquiry not found' });
    }

    res.json({
      message: 'Response sent successfully',
      contact
    });
  } catch (error) {
    console.error('Respond to contact error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Assign contact to user (owner only)
router.patch('/:id/assign', auth, requireOwner, async (req, res) => {
  try {
    const { assignedTo } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { assignedTo },
      { new: true }
    ).populate('assignedTo', 'username email');

    if (!contact) {
      return res.status(404).json({ message: 'Contact inquiry not found' });
    }

    res.json({
      message: 'Contact assigned successfully',
      contact
    });
  } catch (error) {
    console.error('Assign contact error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get contact statistics (owner only)
router.get('/stats/overview', auth, requireOwner, async (req, res) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalContacts = await Contact.countDocuments();
    const newContacts = await Contact.countDocuments({ status: 'new' });
    const repliedContacts = await Contact.countDocuments({ status: 'replied' });

    res.json({
      totalContacts,
      newContacts,
      repliedContacts,
      statusBreakdown: stats
    });
  } catch (error) {
    console.error('Get contact stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
