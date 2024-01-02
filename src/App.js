import React from 'react';
// import VideoList from './components/VideoList';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <VideoList /> */}
      <Outlet />
    </>
  );
}

export default App;
