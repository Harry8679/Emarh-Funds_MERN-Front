import React, { useState } from 'react';
import WelcomeContent from '../common/WelcomeContent';
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';

interface LoginResponse {
    token: string; // Déclarez la structure de la réponse attendue
}

const LoginPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const onSubmit = async (value: { email: string; password: string }) => {
        try {
            setLoading(true); // Déclenche l'état de chargement
            
            // Spécifiez le type de réponse attendue
            const response = await axios.post<LoginResponse>('/api/v1/users/login', value);
            
            message.success('Login successful');
            
            // TypeScript sait maintenant que response.data.token est une chaîne
            Cookies.set('token', response.data.token);
            
            navigate('/');
        } catch (err: unknown) {
            if ((err as AxiosError).isAxiosError) {
                const axiosError = err as AxiosError;
                message.error(axiosError.response?.data?.message || 'An Axios error occurred');
            } else {
                message.error('An unknown error occurred');
            }
        } finally {
            setLoading(false); // Réinitialise l'état de chargement
        }
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
            <div className="welcome-content bg-primary md:flex justify-center items-center hidden">
                <WelcomeContent />
            </div>
            <div className="form-content flex justify-center items-center">
                <Form className='flex flex-col gap-3 w-96' layout='vertical' onFinish={onSubmit}>
                    <h1 className="text-2xl font-bold text-primary">Login to your account</h1>
                    <hr />
                    <Form.Item 
                        label='Email' 
                        name='email' 
                        rules={[{ required: true, message: 'Please enter your email' }]}
                    >
                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item 
                        label='Password' 
                        name='password' 
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input placeholder='Password' />
                    </Form.Item>

                    <Button type='primary' htmlType='submit' loading={loading}>Login</Button>

                    <span className="text-sm">
                        Don't have an account ? <Link to='/register'>Register</Link>
                    </span>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
