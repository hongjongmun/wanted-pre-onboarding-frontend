import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Todo from './pages/todo/Todo'
import About from './pages/About'
import SigninContextProvider from './contexts/SigninContextProvider'


const App = () => {
    return (
        <BrowserRouter>
        <SigninContextProvider>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/signin' element={<Signin/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/todo' element={<Todo/>} />
                </Routes>
        </SigninContextProvider>        
        </BrowserRouter>
    );
}

export default App