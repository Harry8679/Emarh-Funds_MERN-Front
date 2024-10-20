import React from 'react';

const ThemeProvider : React.FC = ({ children } : { children: React.ReactNode }) => {
    return (
        <div>{children}</div>
    );
}

export default ThemeProvider;