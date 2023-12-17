// src/api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: 'AIzaSyA-XkmTFfcDKcVO8NL82Lq9WATQzcn82tw',
  },
});

export default instance;
