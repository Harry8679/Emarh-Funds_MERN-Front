import React from 'react';
import ThemeProvider from './providers/theme-provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/login/Login';
import RegisterPage from './pages/auth/register/Register';
import HomePage from './pages/private/home/Home';

const App : React.FC = () => {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
