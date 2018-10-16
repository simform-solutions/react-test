import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from "graphql/type";
import mongoose from "mongoose"

import ProductDB from "../../mongoose/product";

/**
 * generate projection object for mongoose
 * @param  {Object} fieldASTs
 * @return {Project}
 */

export function getProjection(fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce(
    (projections, selection) => {
      projections[selection.name.value] = true;
      return projections;
    },
    {}
  );
}

const ProductType = new GraphQLObjectType({
  name: "product",
  fields: () => ({
    productName: {
      type: GraphQLString,
      description: "The name of the product."
    },
    productImage: {
      type: GraphQLString,
      description: "The image of the product"
    },
    productPrice: {
      type: GraphQLInt,
      description: "The image of the product"
    },
    rating: {
      type: GraphQLInt,
      description: "The image of the product"
    }
  })
});

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "ProductList",
    fields: {
      product: {
        type: new GraphQLList(ProductType),
        resolve: (root, args, source, fieldASTs) => {
          var projections = getProjection(fieldASTs);
          var foundItems = new Promise((resolve, reject) => {
            ProductDB.find({},projections, (err, record) => {
              err ? reject(err) : resolve(record);
            });
          });
          return foundItems;
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: "AddProduct",
    fields: {
      product: {
        type: new GraphQLList(ProductType),
        args: {
          productName: { type: new GraphQLNonNull(GraphQLString) },
          productImage: { type: new GraphQLNonNull(GraphQLString) },
          productPrice: { type: new GraphQLNonNull(GraphQLInt) },
          rating: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: (
          root,
          {  productName, productImage, productPrice, rating },
          source,
          fieldASTs
        ) => {
          var foundItems = new Promise((resolve, reject) => {
            var product = new ProductDB({
              productName, productImage, productPrice, rating
            });
            product.save((err,record)=>{
              err ? reject(err) : resolve(record)
             
            })
          });
          return foundItems;
        }
      }
    }
  })
});

export default schema;
