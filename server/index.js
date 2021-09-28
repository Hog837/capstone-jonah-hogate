const express = require("express");
const cors = require("cors");
const PostRoutes = require("./routes/PostRoutes");
const fileUpload = require("express-fileUpload");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(fileUpload());

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use((_req, _res, next) => {
  console.log("Incoming Request");
  next();
});
app.use((req, res, next) => {
  if (
    req.method === "POST" &&
    !req.headers["content-type"].includes("multipart/form-data")
  ) {
    return res.status(400).send("Server requires multipart/form-data");
  }
  next();
});
app.use("/", PostRoutes);

app.listen(PORT, () => {
  console.log(`Server is running through ${PORT}`);
});