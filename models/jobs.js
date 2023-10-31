const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position name."],
      maxlength: 50,
    },
    status: {
      type: String,
      enum: ["declined", "interview", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide creater name"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
