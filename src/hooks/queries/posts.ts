import axios from 'axios';
import { ReviewType } from 'src/pages/ReviewList';
import client from './auth';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const getPostList = () => {
  return axios.get(`${baseUrl}posts`);
};

export const postReview = async (review: ReviewType) => {
  await axios.post(`${baseUrl}posts`, review);
  // await client.post(`http://localhost:8080/api/posts`, review);
};
