import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './StyledHeader';

const Header = () => {
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
            <Link to="/post">후기</Link>
          </li>
        </ul>
      </nav>
      <nav className="local-nav">
        <ul>
          <li>
            <Link to="/">전체주문목록</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
