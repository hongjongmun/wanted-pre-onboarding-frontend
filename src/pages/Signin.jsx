import React from 'react'
import Header from '../components/Header'
import SigninContextConsumer from '../contexts/SigninContextConsumer'

const Signin = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h1>Signin</h1>
                <hr />
                <h2>로그인 페이지</h2>
                <SigninContextConsumer />
            </div>
        </>
    )
}

export default Signin