import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoList from './components/VideoList';
import VideoPage from './components/VideoPage';
import NotFound from './components/NotFound';

// / 👉 <Videos>🔥
// /videos 👉 <Videos>🔥
// /videos/query 👉 <Videos>🔍
// /videos/watch/id 👉 <VideoDetail>

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <VideoList /> */}
          <Route path="/" element={<VideoList></VideoList>} />
          <Route path="/videos/watch/id" element={<VideoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
