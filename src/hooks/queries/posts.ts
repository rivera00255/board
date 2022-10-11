import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const getPostList = () => {
  return axios.get(`${baseUrl}posts`);
};
