import mongoose from "mongoose";

/**
 * Express instance
 * @param {*} app
 */

export default app => {
  const encodedPassword = encodeURIComponent("Yarring#3");
  mongoose.connect(
    `mongodb://admin:Yarring3@ds033487.mlab.com:33487/product-cat`
  );
  var db = mongoose.connection;
  db.on("error", err => {
    console.log("---FAILED to connect to mongoose");
  });
  db.once("open", () => {
    console.log("+++Connected to mongoose");
  });
};
