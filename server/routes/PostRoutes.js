const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");
require("dotenv").config();

const postsFilePath = path.join(__dirname, "../data/posts.json");
const viewPosts = () => {
  const postContent = fs.readFileSync(postsFilePath);
  const parsedPostContent = JSON.parse(postContent);
  return parsedPostContent;
};

router.get("/posts", (_req, res) => {
  try {
    const posts = viewPosts();
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ error: "File cannot be read." });
  }
});

router.post("/upload", (req, res) => {
  console.log(req.files);
  req.files.uploadingFishImage.mv(
    path.join(__dirname, "../public/images/" + req.files.uploadingFishImage.name)
  );

  const uploadPost = {
    id: uniqid(),
    image: "http://localhost:8080/images/" + req.files.uploadingFishImage.name,
    type: req.body.type,
    weight: req.body.weight,
    bait: req.body.bait,
    location: req.body.location,
  };
  const post = viewPosts();
  post.push(uploadPost);
  fs.writeFileSync(postsFilePath, JSON.stringify(post));
  return res.status(201).json(uploadPost);
});
module.exports = router;