import { css } from '@emotion/react';

const StyledHeader = css`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eee;
  display: flex;
  nav {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 100%;
      padding: 10px 80px;
      flex: 0 0 content;
      h1 {
        display: block;
        width: 52px;
        font-weight: bold;
        font-size: 1.8rem;
      }
      img {
        width: 100%;
      }
    }
    ul {
      height: 100%;
      display: flex;
      align-items: center;
      flex: 0 0 100%;
      li {
        margin: 0 40px;
      }
    }
  }
  .local-nav {
    width: 15%;
    li {
      margin: 0 10px;
      font-size: 0.8rem;
    }
  }
`;

export default StyledHeader;
