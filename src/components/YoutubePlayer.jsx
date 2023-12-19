import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styles from './VideoPlayer.module.css';

const YoutubePlayer = () => {
  const [videoId, setVideoId] = useState('VIDEO_ID');
  // 실제 YouTube 동영상 ID
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // event.target.pauseVideo();
    // 재생 시작 후 수행할 작업
  };

  const onVideoChange = (newVideoId) => {
    setVideoId(newVideoId);
  };

  return (
    <div>
      <div className={styles['video-container']}>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
      <input type="text" placeholder="YouTube Video ID" onChange={(e) => onVideoChange(e.target.value)} />
    </div>
  );
};

export default YoutubePlayer;
