import React from 'react'

// todoItem 부분 
const TodoItem = ( { todo } ) => {
    return (
        <li className="todoItem">
            <div className="item">
                <input type="checkbox" id={todo.no} />
                <label htmlFor={todo.no}></label>
                <span>{todo.name}</span>
            </div>
            <div className="item">
                <button className='btn'>삭제</button>
            </div>
        </li>
    )
}

const TodoList = ( {todoList} ) => {
    return (
        <ul className="todoList">
        {todoList.map( (todo) => (
            <TodoItem 
                key={todo.no}
                todo={todo}
            />
        ))}
        </ul>
    )
}

export default TodoList