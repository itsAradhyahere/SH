// src/components/sliders/MainVideoSlider.tsx
import { useEffect, useRef } from "react";

const videoSources = [
  "/videos/merged-slider1-3.mp4", // merged slider 1 and 3 video
  "/videos/burning-fields.mp4",   // after thermal power plant, burning fields video
  "/videos/clean-nature.mp4",      // last clean nature video
];

const MainVideoSlider = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      indexRef.current = (indexRef.current + 1) % videoSources.length;
      video.src = videoSources[indexRef.current];
      video.play();
    };

    video.addEventListener("ended", handleEnded);

    video.src = videoSources[0];
    video.play();

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl">
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        className="w-full h-auto object-cover aspect-video"
      />
    </div>
  );
};

export default MainVideoSlider;
