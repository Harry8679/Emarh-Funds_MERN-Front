import { ConfigProvider } from 'antd';
import React from 'react';

const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
    return (
        <ConfigProvider>{children}</ConfigProvider>
    );
}

export default ThemeProvider;