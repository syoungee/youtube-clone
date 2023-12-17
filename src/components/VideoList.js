// src/VideoList.js

import React, { useState, useEffect } from 'react';
import api from '../apis/api';

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await api.get('/search', {
          params: {
            q: '고양이', // 원하는 검색어를 입력하세요.
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>YouTube Clone</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <p>{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
