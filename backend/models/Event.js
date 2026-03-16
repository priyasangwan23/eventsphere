const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add an event title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
      enum: ['workshop', 'hackathon', 'conference'],
    },
    location: {
      type: String,
      required: [true, 'Please add a location'],
    },
    date: {
      type: Date,
      required: [true, 'Please add a date'],
    },
    organizer: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    attendees: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
    image: {
      type: String,
      default: 'default-event.jpg',
    },
    capacity: {
      type: Number,
      required: [true, 'Please add event capacity'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
