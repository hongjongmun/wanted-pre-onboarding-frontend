import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src="https://velog.velcdn.com/images/rgfdds98/post/095765c8-848e-4c38-a13b-e9e8253b38d9/image.png"
                        alt="logo" 
                        className="logo" />
                </Link>
            </div>

            <div className="util">
                {
                    <ul>
                        <li><Link className="btn" to="/signin">로그인</Link></li>
                        <li><Link className="btn" to="/signup">회원가입</Link></li>
                        <li><Link className="btn" to="/todo">TodoList</Link></li>
                        <li><button className="btn" onClick={ () => logoutHandler()}>로그아웃</button></li>
                    </ul>
                }
                
            </div>
        </header>
    )
}

export default Header