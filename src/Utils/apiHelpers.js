/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const USER_KEY = process.env.REACT_APP_USER_KEY;

export const api = () => {
  const instance = axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1/',
    timeout: 5000,
    headers: { 'user-key': USER_KEY },
  });

  return instance;
};
