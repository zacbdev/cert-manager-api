var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  userName: String,
  fullName: String,
  organization: String,
  certId: {type: mongoose.Schema.Types.ObjectId, ref: 'Certification'},
  earned_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
