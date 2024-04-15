import React, { useState } from 'react'
import { styled } from 'styled-components';
import Header from '../components/Header'
import { emailValidate, passwordValidate } from '../utils/accountValid';
import { userSignup } from '../apis';
import useInput from '../utils/inputValid';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [error,setError] = useState('');
    const { 
        value: enterdEmail,
        valueIsValid: enterdEmailIsValid,
        valueChangeHandler: emailChangeHandler,
        reset: resetEmailInput,
    } = useInput(emailValidate);
  
    const { 
        value: enterdPassword,
        valueIsValid: enterdPasswordIsValid,
        valueChangeHandler: passwordChangeHandler,
        reset: resetpasswordInput,
    } = useInput(passwordValidate);
  
    const submitHandler = async (event) => {
        event.preventDefault();
        if(enterdEmailIsValid && enterdPasswordIsValid){
            try{
                await userSignup(enterdEmail,enterdPassword);
                resetEmailInput();
                resetpasswordInput();
                navigate('/signin');
            }catch(error){
                resetEmailInput();
                setError(error.message)
            }
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <h1>Signup</h1>
                <hr />
                <h2>회원가입 페이지</h2>
                <FormBox onSubmit={submitHandler}>
                    <label>아이디</label>
                    <input 
                        type='text'
                        data-testid="email-input"
                        placeholder='이메일'
                        value={enterdEmail}
                        onChange={emailChangeHandler}  
                        onFocus={() => setError('')}
                    />
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <label>패스워드</label>
                    <input 
                        type='password'
                        data-testid="password-input"
                        placeholder='패스워드'
                        style={{marginBottom: '50px'}}
                        value={enterdPassword}
                        onChange={passwordChangeHandler}
                    />
                    <button className='btn'
                        data-testid="signup-button"
                        disabled={!enterdEmailIsValid || !enterdPasswordIsValid}
                    >
                        회원가입
                    </button>
                </FormBox>
            </div>
        </>
    )
}

export default Signup

export const FormBox = styled.form
`
    display: flex;
    flex-direction: column;
    outline: none;
    label {
        color: black;
        font-size: 20px;
    }
    input{
        height: 30px;
        font-size: 1rem;
    }
    button {
        width: 80%;
        margin: auto;
        font-size: 1.7rem;
        border-radius: 20px;
        height: 50px;
        cursor: pointer;
        &:disabled{
        cursor: not-allowed;
        }
    }
`;