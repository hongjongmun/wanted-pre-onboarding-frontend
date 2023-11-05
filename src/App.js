import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/section/Main'

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Todo from './pages/Todo'
import Not from './pages/Not'


const App = () => {
    return (
        <BrowserRouter>
            <Main>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/signin' element={<Signin/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/todo' element={<Todo/>} />
                    <Route path='/*' element={<Not/>} />
                </Routes>
            </Main>
        </BrowserRouter>
    )
}

export default App