import { css } from '@emotion/react';

const StyledOrderList = css`
  .container {
    width: 1200px;
    margin: 0 auto;
    @media (max-width: 1200px) {
      width: 100%;
      padding: 0 16px;
    }
    .list {
      width: 100%;
      .list-nav {
        margin: 40px 0 20px 0;
      }
      ul {
        width: 100%;
        display: flex;
      }
      li {
        border: 1px solid #888;
        border-radius: 5px;
        padding: 0 8px;
        margin-right: 4px;
        cursor: pointer;
      }
      .list-table {
        .row {
          width: 100%;
          display: flex;
          /* justify-content: space-around; */
          align-items: center;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
        }
        .column {
          padding: 8px;
          width: calc((100% - 240px) / 2);
        }
        .column:first-of-type {
          width: 80px;
        }
        .column:last-of-type {
          width: 160px;
        }
      }
    }
  }
`;

export default StyledOrderList;
