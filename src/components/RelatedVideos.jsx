import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import styles from '../components/VideoList.module.css';
import { formatAgo } from '../util/date';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['related', id],
    queryFn: () => youtube.relatedVideos(id),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      Related Videos
      {id}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      <ul className={styles['video-container']}>
        {videos &&
          videos.map((video) => (
            <li key={video.id || video.id?.videoId}>
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className={styles['thumbnail']} />
              <div>
                <p className="font-semibold my-2 line-clamp-2">{video.snippet.title}</p>
                <p className="text-sm opacity-80">{video.snippet.channelTitle}</p>
                <p className="text-sm opacity-80">{formatAgo(video.snippet.publishedAt, 'ko')}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
