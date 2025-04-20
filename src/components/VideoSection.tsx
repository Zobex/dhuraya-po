import React from "react";

function VideoSection() {
  return (
    <video
      src="/assets/vedio.mp4"
      className="w-full titleInfo"
      autoPlay
      loop
      muted
      controls
    />
  );
}

export default VideoSection;
