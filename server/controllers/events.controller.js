const Event = require("../models/events.model");

module.exports = {
  getAll(req, res) {
    Event.find()
      .then((events) => {
        res.json(events);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  create(req, res) {
    Event.create(req.body)
      .then((event) => {
        res.json(event);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    Event.findById(req.params.id)
      .then((event) => {
        res.json(event);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    Event.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((event) => {
        res.json(event);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    Event.findByIdAndDelete(req.params.id)
      .then((event) => {
        res.json(event);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
