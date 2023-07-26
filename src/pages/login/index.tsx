import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.css';

function LoginPage() {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    /* eslint-disable-next-line no-console */
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    /* eslint-disable-next-line no-console */
    console.log('Failed:', errorInfo);
  };

  const login = () => {
    navigate('/home');
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="login-form-title">Rent a Shelf Space</div>
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          // wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter the user name.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter the password.' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember the login details</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={login}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
