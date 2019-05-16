var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Certification = require('../models/Certification.js');
var User = require('../models/User.js');

/* GET ALL USERS */
router.get('/', function(req, res, next) {
  Certification.find(function (err, certifications) {
    if (err) return next(err);
    res.json(certifications);
  });
});

/* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {
  Certification.findById(req.params.id, function (err, certifications) {
    if (err) return next(err);
    res.json(certifications);
  });
});

/* GET USERS FROM CERTIFICATIONS BY ID */
router.get('/:id/users', function(req, res, next) {
  User.find({ certId: req.params.id }, function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* SAVE USER */
router.post('/', function(req, res, next) {
  Certification.create(req.body, function (err, certifications) {
    if (err) return next(err);
    res.json(certifications);
  });
});

/* UPDATE USER */
router.put('/:id', function(req, res, next) {
  Certification.findByIdAndUpdate(req.params.id, req.body, function (err, certifications) {
    if (err) return next(err);
    res.json(certifications);
  });
});

/* DELETE USER */
router.delete('/:id', function(req, res, next) {
  Certification.findByIdAndRemove(req.params.id, req.body, function (err, certifications) {
    if (err) return next(err);
    res.json(certifications);
  });
});

module.exports = router;
