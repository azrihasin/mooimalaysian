const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    // title: {
    //   type: String,
    //   required: false,
    //   unique: true,
    // },
    // desc: {
    //   type: String,
    //   required: false,
    // },
    // photo: {
    //   type: String,
    //   required: false,
    // },
    username: {
      type: String,
      required: false,
    },
    // categories: {
    //   type: Array,
    //   required: false,
    // },
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
