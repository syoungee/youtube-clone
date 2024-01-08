import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styles from './VideoPlayer.module.css';

const YoutubePlayer = ({ title, videoId, channelTitle, channelDesc, publishedAt, channelId }) => {
  // 실제 YouTube 동영상 ID
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div>
        <div className={styles['video-container']}>
          <YouTube videoId={videoId || '1KjjniXYsCw'} opts={opts} />
        </div>
        <div className={styles['title-container']}>
          <h3>{title}</h3>
          <h3>{channelDesc}</h3>
        </div>
        <div className={styles['title-container']}>
          <p>{channelTitle}</p>
          <p>{publishedAt}</p>
        </div>
      </div>
    </>
  );
};

export default YoutubePlayer;
