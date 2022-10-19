import axios from 'axios';
import { OrderType } from 'src/pages/Main';
import { SearchType } from 'src/pages/OrderInfo/Index';

const baseUrl = 'http://localhost:8080/api/';

export const postOrder = async (order: OrderType) => {
  await axios.post(`${baseUrl}order`, order);
};

export const getOrder = async (params: SearchType) => {
  const data: OrderType = await axios.get(`${baseUrl}order${params ? '?' + params : ''}`);
  return data;
};
