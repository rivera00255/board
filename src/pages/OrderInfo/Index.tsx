import React from 'react';
import StyledOrderInfo from './StyledOrderInfo';

const OrderInfo = () => {
  return (
    <section css={StyledOrderInfo}>
      <div className="container">
        <div className="title">주문 확인</div>
        <div className="input-form">
          <form>
            <input type="text" placeholder="주문자 이름" />
            <input type="text" placeholder="휴대폰 번호(숫자만 입력)" />
            <button>주문 확인하기</button>
          </form>
        </div>
        <div className="result">
          <div className="order-info-card">
            <div>
              <p>
                <strong>주문 내역</strong>
              </p>
              <p>상품</p>
              <p>총 주문금액: </p>
              <p>배송 정보: </p>
            </div>
            <p>주문인: </p>
            <p>연락처: </p>
            <p>주소: </p>
            <button>주문취소</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderInfo;
