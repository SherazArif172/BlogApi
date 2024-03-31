require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("connetcted");
    })
    .catch((error) => {
      console.log("Error while connecting! ", error);
    });
};

module.exports = connectDb;
