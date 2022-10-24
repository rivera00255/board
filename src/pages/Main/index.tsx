import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Postcode from 'react-daum-postcode';
import { useForm } from 'react-hook-form';
import { postOrder } from 'src/hooks/queries/order';
import StyledMain from './StyledMain';

export interface OrderType {
  name: string;
  phone: string;
  address: string;
  product: ProductType[];
  status?: string;
  price?: string;
}

interface ProductType {
  type: string;
  size: string;
  quantity: number;
}

const Main = () => {
  const blazerSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const skirtSizes = ['S', 'M', 'L', 'XL'];

  const [option, setOption] = useState(new Map());
  const [visible, setVisible] = useState(false);

  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const { mutate: orderMutate } = useMutation(postOrder, {
    onSuccess: () => {
      alert('주문이 완료되었습니다.');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  // 총 주문금액 계산
  const handleTotalPrice = () => {
    let blazerQuan = 0;
    let skirtQuan = 0;
    for (let item of option.values()) {
      if (item.quantity !== '') {
        if (item.type === 'blazer') blazerQuan += parseInt(item.quantity);
        if (item.type === 'skirt') skirtQuan += parseInt(item.quantity);
      }
    }
    return Number(blazerQuan * 139000 + skirtQuan * 59000);
  };

  // 주문상품배열
  const handleProduct = () => {
    let product: ProductType[] = [];
    Array.from(option.values()).reduce((acc, cur) => {
      product.push(cur);
    }, []);
    return product;
  };

  // 주소 검색
  const handlePostcode = (data: any) => {
    let fullAddress = `(${data.zonecode}) ${data.address}`;
    // let extraAddress = '';

    // if (data.addressType === 'R') {
    //   if (data.bname !== '') {
    //     extraAddress += data.bname;
    //   }
    //   if (data.buildingName !== '') {
    //     extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    //   }
    //   fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    // }

    // console.log(fullAddress);
    setValue('address1', fullAddress);
    setVisible(false);
  };

  // 주문하기
  const onSubmit = async (data: any) => {
    const product = handleProduct();
    data = getValues();

    if (product.length > 0 && Object.keys(errors).length < 1) {
      // console.log(product);
      // console.log(data);
      orderMutate({
        name: data.name,
        phone: data.phone,
        address: data.address1 + ' ' + data.address2,
        product: product,
      });
      setOption(new Map());
    } else {
      alert('주문 수량 및 정보를 입력해주세요.');
    }
  };

  return (
    <section css={StyledMain}>
      <div className="container">
        <h3>AUTUMN VIBE</h3>
        <h4>셋업 공동구매</h4>
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
                  {size}
                  <input
                    type="number"
                    placeholder="주문수량"
                    min={1}
                    max={100}
                    onChange={(e) => {
                      setOption(
                        (prev) =>
                          new Map([
                            ...prev,
                            [`balzer${size}`, { type: 'blazer', size: size, quantity: e.target.value }],
                          ]),
                      );
                    }}
                  />
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
                  {size}
                  <input
                    type="number"
                    placeholder="주문수량"
                    min={1}
                    max={100}
                    onChange={(e) => {
                      setOption(
                        (prev) =>
                          new Map([...prev, [`skirt${size}`, { type: 'skirt', size: size, quantity: e.target.value }]]),
                      );
                    }}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
        <h5>총 주문금액 : {handleTotalPrice().toLocaleString()}원</h5>
        <div className="order">
          <h4>주문 정보</h4>
          <input type="text" placeholder="주문자 이름" {...register('name', { required: true })} />
          {errors.name && <div className="error-message">이름을 입력해주세요.</div>}
          <input
            type="text"
            placeholder="휴대폰 번호 (숫자만 입력)"
            {...register('phone', { pattern: /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g })}
          />
          {errors.phone && <div className="error-message">숫자만 입력해주세요.</div>}
          <div className="row">
            <input type="text" placeholder="도로명 주소" readOnly {...register('address1')} />
            <button type="button" className="postcode-btn" onClick={() => setVisible(true)}>
              우편번호 찾기
            </button>
          </div>
          {visible && (
            <div className="postalcode-wrapper">
              <Postcode onComplete={handlePostcode} />
            </div>
          )}
          <input type="text" placeholder="상세 주소" {...register('address2')} />
          <button type="submit" onClick={onSubmit}>
            주문하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
