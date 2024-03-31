const Model = require("../models/scheema");

const blogs = async (req, res) => {
  const { title, content, author, sort, select } = req.query;
  const queryObject = {};

  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }

  if (content) {
    queryObject.content = { $regex: content, $options: "i" };
  }
  if (author) {
    queryObject.author = { $regex: author, $options: "i" };
  }
  let apiData = Model.find(queryObject);
  if (sort) {
    let sortFixed = sort.split(",").join(" ");
    apiData = apiData.sort(sortFixed);
  }
  if (select) {
    let selectFixed = select.split(",").join(" ");
    apiData = apiData.select(selectFixed);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 3;
  const skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length });
};

module.exports = blogs;
