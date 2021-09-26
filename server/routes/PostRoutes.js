const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");
const fileUpload = require("express-fileUpload");
const path = require('path');

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
  };
});

router.get("/:id", (req, res) => {
  const viewContent = viewPosts();
  const selectedPost = viewContent.find((post) => {
    return post.id === req.params.id;
  });
  console.log(viewContent);
  res.status(200).json(selectedPost);
});


// file upload code



const util = require('util');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());

router.post("/", async (req, res) => {
  try{
    const file = req.files.file;
    const fileName = file.name;
    const size = file.data.length;
    const extension = path.extname(fileName);
    const allowedExtensions = /png|jpeg|jpg/;
    if (!allowedExtensions.test(extension)) throw "Unsupported Extension!";
    if (size > 10000000) throw "File must be less than 10MB";
    const md5 = file.md5;
    const URL = "/images/" + md5 +extension;
    await util.promisify(file.mv)("../public" + URL);
    res.json({
      message: "File uploaded successfully!",
      url: URL,
    });
  } catch(err){
    console.log(err);
    res.status(500).json({
      message: err,
    });
  }
  const uploadPost = {
    id: uniqid(),
    "image": req.body.image,
    "type": req.body.type,
    "weight": req.body.weight,
    "bait": req.body.bait,
    "location": req.body.location,
  };
  const post = viewPosts();
  post.push(uploadPost);
  fs.writeFileSync(postsFilePath, JSON.stringify(post));
  return res.status(201).json(uploadPost);
});
module.exports = router;