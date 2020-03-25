const mongoose = require('mongoose');

/**
 * Create an Event Schema
 */
const EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});


/**
 * Save the Schema as a model
 */
const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
