import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import SearchHeader from '../components/SearchHeader';
import styles from '../components/VideoList.module.css';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { formatAgo } from '../util/date';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos } = useQuery({ queryKey: ['videos', keyword], queryFn: () => youtube.search(keyword) });

  return (
    <div>
      <SearchHeader />
      Videos {keyword ? `🔍${keyword}` : '🔥'}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      <ul className={styles['video-container']}>
        {videos &&
          videos.map((video) => (
            <li key={video.id}>
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className={styles['thumbnail']} />
              <div>
                <p className="font-semibold my-2 line-clamp-2">{video.snippet.title}</p>
                <p className="text-sm opacity-80">{video.snippet.channelTitle}</p>
                {/* <p>{video.snippet.publishedAt}</p> */}
                <p className="text-sm opacity-80">{formatAgo(video.snippet.publishedAt, 'ko')}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
