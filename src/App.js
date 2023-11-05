import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Todo from './pages/Todo'
import Not from './pages/Not'
import Header from './components/section/Header'
import Footer from './components/section/Footer'


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/signin' element={<Signin/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/todo' element={<Todo/>} />
                    <Route path='/*' element={<Not/>} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    )
}

export default App