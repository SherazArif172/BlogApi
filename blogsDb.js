require("dotenv").config();
const connectDb = require("./db/connect");
const BlogsModel = require("./models/scheema");
const Blogs = require("./blogs.json");

const start = async () => {
  try {
    await connectDb();
    await BlogsModel.deleteMany();
    // const BlogPost = new BlogsModel(Blogs[1]);    for saving one

    for (const blog of Blogs) {
      const BlogPost = new BlogsModel(blog);
      const saved = await BlogPost.save();
      console.log(saved);
    }
  } catch (error) {
    console.log(error);
  }
};

start();
