const mongoose = require("mongoose");
const itemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add text"],
    },
    details: {
      type: String,
      required: [true, "Please add text"],
    },
    list: {
      type: String,
      required: [true, "Please add list"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
