import React from 'react';
// import VideoList from './components/VideoList';
import { Outlet } from 'react-router-dom';
// import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider, queryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <VideoList /> */}
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
