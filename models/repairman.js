const mongoose = require("mongoose");

const repairmanSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Repairman", repairmanSchema);
