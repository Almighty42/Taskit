// React
import React, { useState } from 'react';
// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Style
import './global.scss';
// Context
import UserContext from 'UserContext';
// TODO
import LoginPage from 'views/Login/LoginPage/LoginPage';
import RegisterPage from 'views/Register/RegisterPage/RegisterPage';
function App() {
    // useState
    var _a = useState(''), email = _a[0], setEmail = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(UserContext.Provider, { value: { email: email, setEmail: setEmail } },
            React.createElement(BrowserRouter, null,
                React.createElement(Routes, null,
                    React.createElement(Route, { path: '/register', element: React.createElement(RegisterPage, null) }),
                    React.createElement(Route, { path: '/login', element: React.createElement(LoginPage, null) }))))));
}
export default App;
