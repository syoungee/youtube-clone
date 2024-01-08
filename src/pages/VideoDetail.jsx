import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import SearchHeader from '../components/SearchHeader';
import YoutubePlayer from '../components/YoutubePlayer';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function VideoDetail() {
  const { youtube } = useYoutubeApi();
  const { videoId } = useParams();
  const { isLoading, error, data: channels } = useQuery({ queryKey: ['channel', videoId], queryFn: () => youtube.searchChannel(videoId) });

  return (
    <>
      <SearchHeader />
      VideoDetail
      <YoutubePlayer channelTitle={''} channelDesc={''} publishedAt={''} />
    </>
  );
}
