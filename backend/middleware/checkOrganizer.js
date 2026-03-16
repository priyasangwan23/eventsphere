const Event = require('../models/Event');

const checkOrganizer = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    if (event.organizer.toString() !== req.user.id) {
      return res.status(403).json({ 
        success: false, 
        message: 'User not authorized to modify this event' 
      });
    }

    req.event = event;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = checkOrganizer;
