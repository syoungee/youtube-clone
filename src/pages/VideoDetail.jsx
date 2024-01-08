import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import SearchHeader from '../components/SearchHeader';
import YoutubePlayer from '../components/YoutubePlayer';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import RelatedVideos from '../components/RelatedVideos';
import ChannelInfo from '../components/ChannelInfo';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, channelDesc, publishedAt } = video.snippet;
  const { youtube } = useYoutubeApi();
  const { videoId } = useParams();
  const { isLoading, error, data: channels } = useQuery({ queryKey: ['channel', videoId], queryFn: () => youtube.searchChannel(videoId) });
  console.log(video);

  return (
    <>
      <SearchHeader />
      <YoutubePlayer
        title={title || ''}
        videoId={video?.id?.videoId || video.id}
        channelTitle={channelTitle || ''}
        channelDesc={channelDesc || ''}
        publishedAt={publishedAt || ''}
        channelId={channelId}
      />
      <ChannelInfo id={channelId} name={channelTitle} />
      <RelatedVideos id={channelId} />
    </>
  );
}
