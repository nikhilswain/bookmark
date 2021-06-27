const mongoose = require('mongoose');

const PinSchema = mongoose.Schema({
  pin: {
    type: String,
    required: true,
  },
  pinUrl: {
    type: String
  },
});

const Pins = mongoose.model('Pins', PinSchema);
module.exports = Pins;
