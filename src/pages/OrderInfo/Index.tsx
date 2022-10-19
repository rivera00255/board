import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';
import { OrderType } from '../Main';
import StyledOrderInfo from './StyledOrderInfo';

export interface SearchType {
  name?: string;
  phone?: string;
}

const OrderInfo = () => {
  const [formValue, setFormValue] = useState<SearchType | null>(null);
  const [enable, setEnable] = useState(false);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    formValue !== null && setEnable(true);
  };

  const { data: orderData } = useQuery(
    ['order', formValue],
    async () => {
      const data: OrderType = await axios.get(
        `http://localhost:8080/api/order?name=${formValue?.name}&phone=${formValue?.phone}`,
      );
      return data;
    },
    {
      enabled: enable,
      retry: false,
    },
  );

  return (
    <section css={StyledOrderInfo}>
      <div className="container">
        <div className="title">주문 확인</div>
        <div className="input-form">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="주문자 이름"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValue((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="휴대폰 번호(숫자만 입력)"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValue((prev) => ({ ...prev, phone: e.target.value }));
              }}
            />
            <button>주문 확인하기</button>
          </form>
        </div>
        <div className="result">
          {orderData ? (
            <div className="order-info-card">
              <div>
                <p>
                  <strong>주문 내역</strong>
                </p>
                {orderData.product.map((item) => (
                  <p>
                    {item.type}({item.size}) {item.quantity}개
                  </p>
                ))}
                <p>총 주문금액: {orderData.price}</p>
                <p>배송 정보: {orderData.status}</p>
              </div>
              <p>주문인: {orderData.name}</p>
              <p>연락처: {orderData.phone}</p>
              <p>주소: {orderData.address}</p>
              <button>주문취소</button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default OrderInfo;
