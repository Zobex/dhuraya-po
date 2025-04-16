import React from "react";

function VedioSection() {
  return (
    <div className="w-full bg-slate-600">
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
