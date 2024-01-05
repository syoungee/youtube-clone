// src/VideoList.js
import React, { useState, useEffect } from 'react';
import api from '../api/api';
import SearchHeader from './SearchHeader';
import styles from './VideoList.module.css';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState('');

  const getSearchedData = () => {
    // const fetchVideos = async () => {
    //   try {
    //     console.log('fetch data updating,,,', keyword);
    //     const response = await api.get('/search', {
    //       params: {
    //         q: keyword, // 원하는 검색어를 입력하세요.
    //       },
    //     });
    //     console.log(response.data);
    //     setVideos(response.data.items);
    //   } catch (error) {
    //     console.error('Error fetching videos:', error);
    //   }
    // };
    // fetchVideos();
    try {
      console.log('video list component');
      fetch(`data/searchResult.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log(`get video data...`);
          setVideos(data.items);
        });
    } catch (error) {
      console.log('error fetching videos...', error);
    }
  };

  useEffect(() => {
    // const fetchVideos = async () => {
    //   try {
    //     const response = await api.get('/search', {
    //       params: {
    //         q: '고양이', // 원하는 검색어를 입력하세요.
    //       },
    //     });
    //     setVideos(response.data.items);
    //   } catch (error) {
    //     console.error('Error fetching videos:', error);
    //   }
    // };

    // fetchVideos();
    try {
      console.log('video list component');
      fetch(`data/sampleData.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log(`get video data...`);
          setVideos(data.items);
        });
    } catch (error) {
      console.log('error fetching videos...', error);
    }
  }, []);

  return (
    <div>
      <SearchHeader />
      <ul className={styles['video-container']}>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className={styles['thumbnail']} />
            <p>{video.snippet.title}</p>
            <p>{video.snippet.channelTitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
