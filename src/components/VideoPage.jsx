import React, { useState, useEffect } from 'react';
import api from '../apis/api';
import Header from './SearchHeader';
import YoutubePlayer from './YoutubePlayer';

export default function VideoPage() {
  const [videos, setVideos] = useState([]);
  const [channelData, setChannelData] = useState([]);
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

  const getChannelData = () => {
    // https://www.googleapis.com/youtube/v3/search
    // "part": [
    //   "snippet"
    // ],
    // "q": "YgwdYs8kMsA"
    try {
      console.log('video list component');
      fetch(`data/videoData.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log(`get video data...`);

          console.log(data.items?.[0]?.snippet);
          // channelId, channelTitle, description, publishedAt
          // channelData?.[0]?.snippet.channelTitle
          setChannelData(data.items);
        });
    } catch (error) {
      console.log('error fetching videos...', error);
    }
  };

  useEffect(() => {
    getChannelData();
  }, []);

  return (
    <div>
      <Header setKeyword={setKeyword} getSearchedData={getSearchedData} />
      <YoutubePlayer
        channelTitle={channelData?.[0]?.snippet?.channelTitle}
        channelDesc={channelData?.[0]?.snippet?.description}
        publishedAt={channelData?.[0]?.snippet?.publishedAt}
      />
    </div>
  );
}
