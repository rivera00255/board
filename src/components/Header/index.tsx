import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store';
import StyledHeader from './StyledHeader';
import { googleLogout } from '@react-oauth/google';
import { logout } from 'src/store/slices/userSlice';

const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <header css={StyledHeader}>
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>ZARA</h1>
            {/* <h1>
              <img src="./assets/images/books.png" alt="logo" />
            </h1> */}
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">주문하기</Link>
          </li>
          <li>
            <Link to="/order">주문확인</Link>
          </li>
          <li>
            <Link to="/review">후기</Link>
          </li>
        </ul>
      </nav>
      <nav className="local-nav">
        <ul>
          {user.auth === '' ? (
            <li>
              <Link to="/admin" style={{ color: '#888' }}>
                전체주문목록
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => {
                  dispatch(logout());
                  googleLogout();
                }}
              >
                로그아웃
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
