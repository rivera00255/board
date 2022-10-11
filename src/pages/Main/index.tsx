import React from 'react';
import StyledMain from './StyledMain';

const Main = () => {
  const blazerSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const skirtSizes = ['S', 'M', 'L', 'XL'];

  return (
    <section css={StyledMain}>
      <div className="container">
        <h3>AUTUMN VIBE</h3>
        <div className="info">
          <div className="product-detail">
            <div className="product-title">오버사이즈 포켓 블레이저</div>
            <div className="product-content">
              <p>
                비스코스 혼방 소재 블레이저. <br />
                라펠 칼라와 긴소매 디자인. 앞면 플랩 포켓과 가슴 부분 파이핑 포켓. <br />
                톤온톤 내부 안감이 매치됨. 앞면 버튼 여밈.
              </p>
              <p>139,000원</p>
              <img
                src="https://static.zara.net/photos///2022/I/0/1/p/2761/250/800/18/w/750/2761250800_2_5_1.jpg?ts=1664371662270"
                alt="blazer"
              />
            </div>
            <div className="product-option">
              {blazerSizes.map((size: string) => (
                <label key={size}>
                  {size} <input type="number" placeholder="1 ~ 100" min={1} max={100} />
                </label>
              ))}
            </div>
          </div>
          <div className="product-detail">
            <div className="product-title">플리츠 미니 스커트</div>
            <div className="product-content">
              <p>
                벨트 고리가 있는 미니 스커트. <br />
                옆면 포켓 디테일. 플리츠 디테일. <br />
                앞면 지퍼와 메탈 후크 여밈.
              </p>
              <p>59,000원</p>
              <img
                src="https://static.zara.net/photos///2022/I/0/1/p/2761/259/800/18/w/750/2761259800_1_1_1.jpg?ts=1664371662680"
                alt="skirt"
              />
            </div>
            <div className="product-option">
              {skirtSizes.map((size: string) => (
                <label key={size}>
                  {size} <input type="number" placeholder="1 ~ 100" min={1} max={100} />
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="order">
          <h4>주문 정보</h4>
          <input type="text" placeholder="주문자 이름" />
          <input type="text" placeholder="휴대폰 번호" />
          <input type="text" placeholder="도로명 주소" />
          <input type="text" placeholder="상세 주소" />
          <button>주문하기</button>
        </div>
      </div>
    </section>
  );
};

export default Main;
