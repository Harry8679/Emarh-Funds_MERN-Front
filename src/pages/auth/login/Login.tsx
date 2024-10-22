import React from 'react';
import WelcomeContent from '../common/WelcomeContent';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const LoginPage : React.FC = () => {
    const onSubmit = (value: {
        email: string;
        password: string;
    }) => {
        console.log('Received values of form: ', value);
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
            <div className="welcome-content bg-primary md:flex justify-center items-center hidden">
                <WelcomeContent />
            </div>
            <div className="form-content flex justify-center items-center">
                <Form className='flex flex-col gap-3 w-96' layout='vertical' onFinish={onSubmit}>
                    <h1 className="text-2xl font-bold text-primary">Login to your account</h1>
                    <hr />
                    <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please enter your email' }]}>
                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please enter your password' }]}>
                        <Input placeholder='Password' />
                    </Form.Item>

                    <Button type='primary' htmlType='submit'>Login</Button>

                    <span className="text-sm">
                        Don't have an account ? <Link to='/register'>Register</Link>
                    </span>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;