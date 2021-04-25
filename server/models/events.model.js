const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is a required parameter."],
    },
    start: {
      type: Date,
      required: [true, "{PATH} is a required parameter."],
    },
    end: {
      type: Date,
      validate: {
        validator: function (val) {
          return this.start <= val;
        },
        message: "Start date cannot be past the end date.",
      },
      required: [true, "{PATH} is a required parameter."],
    },
  },
  { timestamp: true }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
