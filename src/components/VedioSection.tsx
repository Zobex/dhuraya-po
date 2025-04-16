import React from "react";

function VedioSection() {
  return (
    <div className="w-full bg-transparent">
      <div className="vedioBox">
        <video
          src="/assets/vedio.mp4"
          className="w-full titleInfo"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}

export default VedioSection;
