import React, { useState, createContext } from 'react';

export const SigninContext = createContext();

const SigninContextProvider = ({ children }) => {
    const [isSignin, setIsSignin] = useState(false);

    // 로그인 함수
    const login = async (username, password) => {
        try {
            // 서버에 로그인 요청을 보내는 부분
            // 여기서는 예시로 fetch를 사용하고 있습니다.
            const response = await fetch('https://www.pre-onboarding-selection-task.store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            // 서버로부터의 응답을 확인
            if (response.ok) {
                // 로그인 성공 시
                setIsSignin(true);
            } else {
                // 로그인 실패 시
                alert('로그인에 실패했습니다.');
            }
        } catch (error) {
            // 네트워크 오류 등의 이유로 요청 자체가 실패한 경우
            console.error('로그인 요청 실패:', error);
            alert('로그인 요청 중 오류가 발생했습니다.');
        }
    };

    // 로그아웃 함수
    const logout = () => {
        setIsSignin(false);
    };

    return (
        <SigninContext.Provider value={{ isSignin, login, logout }}>
            {children}
        </SigninContext.Provider>
    );
};

export default SigninContextProvider;