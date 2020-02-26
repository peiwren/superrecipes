const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.book.find(req.query)
      .then(dbbook => res.json(dbbook))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.book.findById(req.params.id)
      .then(dbbook => res.json(dbbook))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.book.create(req.body)
      .then(dbbook => res.json(dbbook))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbbook => res.json(dbbook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.book.findById(req.params.id)
      .then(dbbook => dbbook.remove())
      .then(dbbook => res.json(dbbook))
      .catch(err => res.status(422).json(err));
  }
};
