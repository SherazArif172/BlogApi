const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const blogs_route = require("./routes/products");
// const connect = require("./db/connect");
const connectDb = require("./db/connect");

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/api/blogs", blogs_route);

const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log("connecteddd");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
