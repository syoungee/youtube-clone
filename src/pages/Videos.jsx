import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchHeader from '../components/SearchHeader';
import styles from '../components/VideoList.module.css';

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const { keyword } = useParams();

  useEffect(() => {
    try {
      console.log('video list component');
      fetch(`data/sampleData.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log(`get video data...`);
          setVideos(data.items);
        });
      console.log(videos);
    } catch (error) {
      console.log('error fetching videos...', error);
    }
  }, []);

  return (
    <div>
      <SearchHeader />
      Videos {keyword}
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
