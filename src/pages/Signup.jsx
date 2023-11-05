import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
        axios({
            method: 'post',
            url: 'https://www.pre-onboarding-selection-task.store/auth/signup',
            headers: { 'Content-Type': 'application/json' },
            data: {
                email: email,
                password: password
            }
        })
        .then(response => {
            if (response.status === 201) {
                console.log('회원가입 성공!');
                navigate('/signin');
            }
         })
        .catch(error => {
            console.log('회원가입 실패: ', error);
        });
    } else {
        console.log('이메일 또는 비밀번호가 유효하지 않습니다.');
    }
};

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' disabled={!validateEmail(email) || !validatePassword(password)}>
                회원가입
            </button>
        </form>
    </div>
  );
};

export default Signup;