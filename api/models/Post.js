const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: false,
    },
    profilePic: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    block: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
