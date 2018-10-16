import React, { Component } from "react";
import { connect } from "react-redux";
import * as productActions from "actions/product";
import { ApolloConsumer } from "react-apollo";
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Rate,
  Upload,
  Icon,
  Button
} from "antd";
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const uploadButton = (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">Upload</div>
  </div>
);

const CreateProduct = props => {
  const {
    imageUrl,
    isOpen,
    form: { getFieldDecorator }
  } = props;
  return (
    <Modal
      title="Add product"
      visible={isOpen}
      footer={null}
      onCancel={() => props.onModalToggle(false)}
    >
      <ApolloConsumer>
        {client => (
          <Form>
            <FormItem {...formItemLayout} label="Name">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input product name"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Price">
              {getFieldDecorator("price", {
                rules: [
                  {
                    required: true,
                    message: "Please input product price"
                  }
                ]
              })(<InputNumber />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Rating">
              {getFieldDecorator("rating")(<Rate allowHalf />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Image">
              {getFieldDecorator("image")(
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  onChange={props.onImageChange}
                >
                  {imageUrl ? (
                    <img src={imageUrl} alt="avatar" />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </FormItem>
          </Form>
        )}
      </ApolloConsumer>
    </Modal>
  );
};

export default connect(
  store => ({}),
  productActions
)(Form.create()(CreateProduct));
