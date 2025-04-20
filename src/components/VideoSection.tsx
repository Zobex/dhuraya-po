import React from "react";

const VideoSection = () => {
  return (
    <video
      src="/assets/video.mp4"
      className="w-full titleInfo"
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default VideoSection;
