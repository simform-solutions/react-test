import React from "react";
import { Button } from "antd";
import ContainerHeader from "components/ContainerHeader";
import TableContainer from "components/TableContainer";
import ContainerLayout from "components/ContainerLayout";
import CreateProduct from "./Modal/CreateProduct";
import * as productActions from "actions/product";
import columns from "./columns";
import { connect } from "react-redux";
import "./index.scss";
const dataSource = [
  {
    name: "Sofa",
    image:
      "https://cdn.macrumors.com/article-new/2017/09/productrubyred-800x427.jpg",
    price: 12123,
    rating: 3
  }
];

const ProductCatalouge = props => {
  return (
    <div className="product-list">
      <ContainerHeader
        title="Product list"
        extra={
          <Button type="primary" onClick={() => props.onModalToggle(true)}>
            Create product
          </Button>
        }
      />
      <CreateProduct {...props} />
      <ContainerLayout>
        <TableContainer
          tableProps={{
            dataSource,
            columns: columns(props),
            rowKey: (record, i) => i
          }}
          filterByFields={["name"]}
        />
      </ContainerLayout>
    </div>
  );
};
export default connect(
  ({ product }) => product,
  productActions
)(ProductCatalouge);
