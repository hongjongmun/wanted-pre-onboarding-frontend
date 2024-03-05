import React from 'react'
import Header from '../components/Header'
import SigninContextConsumer from '../contexts/SigninContextConsumer'

const Signup = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h1>Sionup</h1>
                <hr />
                <h2>회원가입 페이지</h2>
                <SigninContextConsumer />
            </div>
        </>
    )
}

export default Signup