import React from 'react';
import WelcomeContent from '../common/WelcomeContent';

const RegisterPage : React.FC = () => {
    return (
        <div className='grid grid-cols-2 h-screen'>
            <div className="welcome-content bg-primary flex justify-center items-center">
                <WelcomeContent />
            </div>
            <div className="form-content"></div>
        </div>
    );
};

export default RegisterPage;