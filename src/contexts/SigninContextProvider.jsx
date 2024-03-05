import React, { createContext, useEffect, useState } from 'react'

export const SigninContext = createContext();
SigninContext.displayname = "SigninContextName"

const SigninContextProvider = ({ children }) => {
    // context value : 로그인 여부, 로그아웃 함수
    const [isSignin, setIsSignin] = useState(false);

    const logout = () => {
        setIsSignin(false)
    }

    useEffect(() => {

        setTimeout(() => {
            setIsSignin(true);
        }, 3000);
    
    }, []);

    return (
        <SigninContext.Provider value={ {isSignin, logout} }>
            {children}
        </SigninContext.Provider>
    )
}

export default SigninContextProvider