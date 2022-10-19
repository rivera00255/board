import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { data } from 'src/data';
import { RootState } from 'src/store';
import Login from '../Login';
import StyledOrderList from './StyledOrderList';

interface OrderData {
  id: number;
  name: string;
  address: string;
  phone: string;
  order: [{ type: string; size: string; quantity: number }];
}

const OrderList = () => {
  const user = useSelector((state: RootState) => state.user);

  const [order, setOrder] = useState(data);

  if (user.auth === '') {
    return <Login />;
  } else {
    return (
      <section css={StyledOrderList}>
        <div className="container">
          <div className="controller"></div>
          <div className="list">
            <div className="list-nav">
              <ul>
                <li>전체</li>
                <li>결제완료</li>
                <li>배송중</li>
                <li>배송완료</li>
                <li>취소</li>
              </ul>
            </div>
            <div className="list-table">
              <div className="row">
                <div className="column">
                  <input type="checkbox" />
                </div>
                <div className="column">주문인</div>
                <div className="column">주문내역</div>
                <div className="column">주문현황</div>
              </div>
              {order.map((item) => (
                <div className="row" key={item.id}>
                  <div className="column">
                    <input type="checkbox" />
                  </div>
                  <div className="column">
                    {
                      <p>
                        {item.name}
                        <br />
                        {item.phone}
                        <br />
                        {item.address}
                      </p>
                    }
                  </div>
                  <div className="column">
                    {item.order.map((detail, i) => (
                      <p key={i}>
                        {detail.type}({detail.size}) - {detail.quantity}
                      </p>
                    ))}
                  </div>
                  <div className="column">주문현황</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default OrderList;
