import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input ,Card} from 'antd';
import { AdminPage } from '../pages/AdminPanel/AdminPage';

export const FormPage = () =>{
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const onLogin = ()=>{
        console.log("Logged in successfully");
        <AdminPage/>
    }

    return (
      <div className='form'>
        <Card>  
            <h2>Login</h2>
            <Form
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="/">
                        Forgot password
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button"
                    onClick={onLogin}
                    >
                        Log in
                    </Button>
                    Or <a href="/">register now!</a>
                </Form.Item>
            </Form>
        </Card>
      </div>
  )
}
