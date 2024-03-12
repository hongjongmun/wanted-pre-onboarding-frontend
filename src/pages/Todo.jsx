import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import { getTodos } from '../apis';
import TodoItem from '../components/todo/TodoItem.jsx';
import TodoForm from '../components/todo/TodoForm.jsx';

const Todo = () => {
  const [todos,setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await getTodos();
        setTodos(data);
      }catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[])

  return (
    <>
        <Header />
        <div className="container">
        <h1>Todo List 페이지</h1>
        <TodoForm AddTodo={setTodos}/>
            {todos.map(({id,todo,isCompleted}) => (
            <TodoItem 
                key={id}
                id={id}
                todo={todo}
                isCompleted={isCompleted}
                setTodos={setTodos}
            />
            ))}
        </div>
    </>
  );
};

export default Todo;