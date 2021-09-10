import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import credentials from './data.json';

const Login = props => {
  const onFinish = values => {
    if (
      values.username === credentials.username &&
      values.password === credentials.password
    ) {
      localStorage.setItem('userDetailsAssignment', JSON.stringify(values));
      props.setUserDetails({ ...values });
    } else {
      message.warning('Invalid credentials');
    }
  };

  return (
    <div style={{ margin: 100, padding: 100, textAlign: 'center' }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            style={{ textAlign: 'center', width: '20vw' }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={{ textAlign: 'center', width: '20vw' }}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: '20vw' }}
            disabled={false}
          >
            SIGN IN
          </Button>
        </Form.Item>
        <div style={{ textAlign: 'center' }}>
          <a
            style={{ textAlign: 'left', margin: 15 }}
            className="login-form-forgot"
            href=""
          >
            Forgot password ?
          </a>
          <a style={{ textAlign: 'right', margin: 15 }} href="">
            Don't have an account? Sign Up
          </a>
        </div>
      </Form>
    </div>
  );
};

export default Login;
