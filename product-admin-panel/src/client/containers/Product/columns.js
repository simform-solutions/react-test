import React from "react";
import { Rate } from "antd";
export default props => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (data, row) => {
        return (
          <img src={data} alt="product image" width="50px" height="50px" />
        );
      }
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (data, row) => {
        return <Rate disabled allowHalf defaultValue={data} />;
      }
    }
  ];
};
