const router = require("express").Router();
const Category = require("../models/Category");
const Post = require("../models/Post");



router.get("/", async (req, res) => {
     const category = req.query.category;
  try {
    let posts;
    if (category) {
      posts = await Post.find({category});
        } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);}
  });



  //By category


module.exports = router;
