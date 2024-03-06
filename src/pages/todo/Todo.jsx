import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import SigninContextConsumer from '../../contexts/SigninContextConsumer'
import TodoList from './TodoList'

const Todo = () => {

    // TodoContainer
    // state
    const [todoList, setTodoList] = useState([]);

    // hook
    useEffect(() => {
        // Mount, Update

        // 서버 ip주소로 get방식으로 요청
        // 할일 목록 요청 [get]
        fetch("???")
            .then( ( response ) => response.json() )
            .then( ( data ) => setTodoList(data) )
            .catch( ( error ) => console.log(error) )

        //UnMount
        return () => {

        }
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                {/* todoheader 부분 */}
                <h1>Todo List</h1>
                <hr />
                <h2>계획 페이지</h2>
                <SigninContextConsumer />

                {/* todoinput 부분 */}
                <form className="form">
                    <input placeholder="할 일 입력"
                           className="input" />
                    <button type="submit"
                            className='btn'>추가</button>
                </form>

                <TodoList todoList={todoList} />

                {/* todofooter 부분 */}
                <div className="footer">
                    <div className="item">
                        <button className="btn">전체삭제</button>
                    </div>
                    <div className="item">
                        <button className="btn">전체완료</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo