var mongoose = require('mongoose');

var certificationSchema = new mongoose.Schema({
  vendor: String,
  certification: String,
  certLogo: String,
  url: String,
  CEUs: Number,
  lifeSpan: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Certification', certificationSchema);
