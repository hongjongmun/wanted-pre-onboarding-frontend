import React, { useEffect, useState } from 'react';
import { deleteTodo, updateTodo } from '../../apis';

const TodoItem = ({ id,todo, isCompleted,setTodos }) => {
  const [checkBox, setCheckBox] = useState(isCompleted);
  const [todoText, setTodoText] = useState(todo);
  const [inputToggle, setInputToggle] = useState(false);

  useEffect(() => {
    setTodoText(todo);
  },[inputToggle,todo,setTodoText])

  const deleteHandler = async () => {
    try{
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }catch(error){
      console.log(error.message);
    }
  }
  const updateHandler = async () => {
    try{
      const { todo,isCompleted } =  await updateTodo(id,todoText,checkBox);
      setTodos((prevTodos) => {
        // 업데이트된 데이터로 새로운 배열 생성
        const updatedTodos = prevTodos.map((todoItem) =>
          todoItem.id === id ? { ...todoItem, todo: todoText, isCompleted: checkBox } : todoItem
        );
        // 데이터 수정
        const existingTodo = prevTodos.find((todoItem) => todoItem.id === id);
        const finalTodos = existingTodo ? updatedTodos : [...prevTodos, { id, todo: todo, isCompleted: isCompleted }];
        return finalTodos;
      });
      setInputToggle(!inputToggle);
    }catch(error){
      console.log(error.message);
    }
  }

  return (
      <label>
        <input type="checkbox" checked={checkBox} onChange={() => setCheckBox(!checkBox)} />
        {
          inputToggle ? (
            <>
              <input type="text" data-testid="modify-input" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
              <button data-testid="submit-button" onClick={updateHandler}>제출</button>
              <button data-testid="cancel-button" onClick={() => setInputToggle(!inputToggle)}>취소</button>
            </>
            ) 
            : 
            (
              <>
                <span>{todo}</span>
                <button data-testid="modify-button" onClick={() => setInputToggle(!inputToggle)}>수정</button>
                <button data-testid="delete-button" onClick={deleteHandler}>삭제</button>
              </>
            )
        }
      </label>
  );
};

export default TodoItem;