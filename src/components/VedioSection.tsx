import React from "react";

function VedioSection() {
  return (
    <video
      src="/assets/video.mp4"
      className="w-full titleInfo"
      autoPlay
      loop
      muted
    />
  );
}

export default VedioSection;
