import React from 'react'
import Header from '../components/Header'
import SigninContextConsumer from '../contexts/SigninContextConsumer'

const Todo = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h1>Todo</h1>
                <hr />
                <h2>계획 페이지</h2>
                <SigninContextConsumer />
            </div>
        </>
    )
}

export default Todo