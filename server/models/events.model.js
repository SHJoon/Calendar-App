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
      required: [true, "{PATH} is a required parameter."],
    },
  },
  { timestamp: true }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
