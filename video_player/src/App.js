import React, { useState } from "react";
import Video from "./components/video";
import Menu from "./components/menu";

const VIDEOS = {
  fast: "https://content.codecademy.com/courses/React/react_video-fast.mp4",
  slow: "https://content.codecademy.com/courses/React/react_video-slow.mp4",
  cute: "https://content.codecademy.com/courses/React/react_video-cute.mp4",
  eek: "https://content.codecademy.com/courses/React/react_video-eek.mp4",
};

function App() {
  const [src, setSrc] = useState(VIDEOS.fast);

  return (
    <div>
      <h1>Video Player</h1>
      <Menu />
      <Video />
    </div>
  );
}

export default App;
