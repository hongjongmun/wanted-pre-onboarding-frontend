import React, { useContext } from 'react'
import { SigninContext } from './SigninContextProvider'

const SigninContextConsumer = () => {
    const { isSignin } = useContext(SigninContext)

  return (
    <div>
        <h3>로그인 여부 : {isSignin ? "YES" : "NO"} </h3>
    </div>
  )
}

export default SigninContextConsumer