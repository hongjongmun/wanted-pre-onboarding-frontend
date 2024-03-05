import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SigninContext } from '../contexts/SigninContextProvider'

const Header = () => {

    // isSignin : 로그인 여부 - Y(true), n(false)

    const { isSignin, logout } = useContext(SigninContext);

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
                    !isSignin 
                    ?
                    /* 비로그인 시*/
                    <ul>
                        <li><Link to="/signin">로그인</Link></li>
                        <li><Link to="/signup">회원가입</Link></li>
                        <li><Link to="/about">소개</Link></li>
                    </ul>
                    :
                    /* 로그인 시*/
                    <ul>
                    <li><Link to="/todo">계획</Link></li>
                    <li><button className="link" onClick={ () => logout()}>로그아웃</button></li>
                    </ul>
                }
                
            </div>
        </header>
    )
}

export default Header