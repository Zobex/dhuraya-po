import React from "react";

function VideoSection() {
  return (
    <video
      src="/assets/video.mp4"
      className="w-full titleInfo"
      autoPlay
      loop
      muted
      controls
    />
  );
}

export default VideoSection;
