import React, { useState, createContext, useEffect } from 'react';

export const SigninContext = createContext();

const SigninContextProvider = ({ children }) => {
    const [isSignin, setIsSignin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsSignin(!!token);
    }, []);

    const logout = () => {
        setIsSignin(false);
        localStorage.removeItem('token'); // 로그아웃 시 토큰도 제거
    };

    return (
        <SigninContext.Provider value={{ isSignin, logout }}>
            {children}
        </SigninContext.Provider>
    );
};

export default SigninContextProvider;