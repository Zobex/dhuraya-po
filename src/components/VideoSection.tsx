"use client";
import React from "react";

function VideoSection() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    videoRef.current?.play().catch((err) => {
      console.warn("Autoplay failed", err);
    });
  }, []);
  return (
    <video
      ref={videoRef}
      src="/assets/vedio.mp4"
      className="w-full titleInfo"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

export default VideoSection;
