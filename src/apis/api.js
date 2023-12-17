// src/api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 100,
    key: 'AIzaSyBVPE2fE-gp35vdAc5VVShgGIlPd8PGcpY',
  },
});

export default instance;
