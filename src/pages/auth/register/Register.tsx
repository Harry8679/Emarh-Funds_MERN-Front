import React from 'react';
import WelcomeContent from '../common/WelcomeContent';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage : React.FC = () => {
    const onSubmit = (value: {
        name: string;
        email: string;
        password: string;
    }) => {
        // console.log('Received values of form: ', value);
        try {
            // await axio
        } catch (err) {}
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
            <div className="welcome-content bg-primary md:flex justify-center items-center hidden">
                <WelcomeContent />
            </div>
            <div className="form-content flex justify-center items-center">
                <Form className='flex flex-col gap-3 w-96' layout='vertical' onFinish={onSubmit}>
                    <h1 className="text-2xl font-bold text-primary">Register Your Account</h1>
                    <hr />
                    <Form.Item label='Full Name' name='name' rules={[{ required: true, message: 'Please enter your full name' }]}>
                        <Input placeholder='Full Name' />
                    </Form.Item>

                    <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please enter your email' }]}>
                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please enter your password' }]}>
                        <Input placeholder='Password' />
                    </Form.Item>

                    <Button type='primary' htmlType='submit'>Register</Button>

                    <span className="text-sm">
                        Have an account ? <Link to='/login'>Login</Link>
                    </span>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;