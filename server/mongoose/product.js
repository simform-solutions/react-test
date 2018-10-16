import mongoose from "mongoose";
var Schema = mongoose.Schema;
// create a schema
var ProductSchema = new Schema(
  {
    productName: String,
    productImage: String,
    productPrice:Number,
    rating:Number

  },
  { collection: "ProductList" }
);
// we need to create a model using it
export default mongoose.model("product", ProductSchema);
 
