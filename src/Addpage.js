import React from 'react';
import { Form, Input, InputNumber, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { updateItems } from './actions';

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};
/* eslint-enable no-template-curly-in-string */

const Addpage = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => {
    return state;
  });
  const [form] = Form.useForm();
  const success = () => {
    message.success('successfully saved');
  };
  const onFinish = values => {
    const len = (items.itemsData.itemsData.length + 1).toString();
    dispatch(
      updateItems({
        ...values.user,
        name: `${values.user.firstName} ${values.user.lastName}`,
        key: len,
        id: len
      })
    );
    form.setFieldsValue({ user: { firstName: '', lastName: '', age: '' } });
    success();
  };

  return (
    <div style={{ margin: 20, float: 'left' }}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        form={form}
      >
        <Form.Item
          name={['user', 'firstName']}
          rules={[
            {
              required: true
            }
          ]}
          label="First Name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'lastName']}
          rules={[
            {
              required: true
            }
          ]}
          label="Last Name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label="Age"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
              required: true
            }
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Addpage;
