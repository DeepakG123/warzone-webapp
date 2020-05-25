const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bunkerSchema = new Schema({
  number: { type: Number, required: true,unique: true,},
  lat: {type: Number, required: true},
  long: {type: Number, required: true}
}, {
  timestamps: true,
});

const Bunker = mongoose.model('Bunker', bunkerSchema);

module.exports = Bunker;
