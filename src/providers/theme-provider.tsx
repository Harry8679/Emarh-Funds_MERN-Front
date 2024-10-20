import { ConfigProvider } from 'antd';
import React from 'react';

const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#283618',
                    borderRadius: 2,
                    controlOutline: 'none'
                },
                components: {
                    Button: {
                        controlHeight: 35,
                        borderRadius: 6,
                    },
                    Input : {
                        controlHeight: 45,
                        borderRadius: 2,
                    }
                }
            }}>
            {children}
        </ConfigProvider>
    );
}

export default ThemeProvider;