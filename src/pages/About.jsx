import React from 'react'
import Header from '../components/Header'
import SigninContextConsumer from '../contexts/SigninContextConsumer'

const About = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h1>About</h1>
                <hr />
                <h2>소개 페이지</h2>
                <SigninContextConsumer />
            </div>
        </>
    )
}

export default About