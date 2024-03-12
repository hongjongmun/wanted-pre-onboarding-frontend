import React, { useRef } from 'react';
import { createTodo } from '../../apis';

const TodoForm = ({ AddTodo }) => {
    const Todo = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();
        const Todoadd = async () => {
        try{
            const TodoData = await createTodo(Todo.current.value);
            AddTodo((prev) => [...prev,TodoData]);
        }catch(error){
            console.log(error.message);
        }
        }
        Todoadd();
    }

    return (
        <form className='form' onSubmit={submitHandler}>
        <input placeholder='할 일 입력' type='text' data-testid="new-todo-input" ref={Todo} className='input'/>
        <button data-testid="new-todo-add-button" className='btn'>추가</button>
        </form>
    );
};

export default TodoForm;