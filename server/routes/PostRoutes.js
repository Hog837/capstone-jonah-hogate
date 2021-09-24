const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

const postsFilePath = "./data/posts.json";
const viewPosts = () => {
  const postContent = fs.readFileSync(postsFilePath);
  const parsedPostContent = JSON.parse(postContent);
  return parsedPostContent;
};
router.get("/", (_req, res) => {
  try {
    const posts = viewPosts();
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ error: "File cannot be read." });
  }
});
router.get("/:id", (req, res) => {
  const viewContent = viewPosts();
  const selectedPost = viewContent.find((post) => {
    return post.id === req.params.id;
  });
  console.log(viewContent);
  res.status(200).json(selectedPost);
});
router.post("/", (req, res) => {
  console.log("Request body object: ", req.body);
  const uploadPost = {
    id: uniqid(),
    image: "",
    type: "Smallmouth Bass",
    weight: "1.68Lbs",
    bait: "Pink Jig",
    location: ""
  };
  const post = viewPosts();
  post.push(uploadPost);
  fs.writeFileSync(postsFilePath, JSON.stringify(post));
  return res.status(201).json(uploadPost);
});
module.exports = router;