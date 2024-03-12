import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Todo from './pages/Todo'
import { TodoRoute, AccountRoute } from '../src/contexts/RouteSetting';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/signin' element={<TodoRoute component={<Signin/>}/>} />
                <Route path='/signup' element={<TodoRoute component={<Signup/>}/>} />
                <Route path='/todo' element={<AccountRoute component={<Todo/>}/>} />
                </Routes>      
        </BrowserRouter>
    );
}

export default App