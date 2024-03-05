import React, { useContext } from 'react'
import { SigninContext } from './SigninContextProvider'

const SigninContextConsumer = () => {
    const { isSignin } = useContext(SigninContext)

  return (
    <div>
        <h3>로그인 여부 : {isSignin ? "로그인" : "로그아웃"} </h3>
    </div>
  )
}

export default SigninContextConsumer