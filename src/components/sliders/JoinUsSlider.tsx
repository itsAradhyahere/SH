// src/components/sliders/JoinUsSlider.tsx
import { useEffect, useRef } from "react";

const joinUsVideos = [
  "/public/videos/joinus1.mp4",
  "/public/videos/MergeSlider1.mp4",
  "/public/videos/Slider3.mp4",
];

const JoinUsSlider = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      indexRef.current = (indexRef.current + 1) % joinUsVideos.length;
      video.src = joinUsVideos[indexRef.current];
      video.play();
    };

    video.addEventListener("ended", handleEnded);

    video.src = joinUsVideos[0];
    video.play();

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-blue-500">
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        className="w-full h-auto object-cover aspect-video"
      />
      <div className="absolute bottom-6 right-6 text-white bg-blue-900 bg-opacity-60 px-4 py-2 rounded-md font-bold text-lg md:text-xl">
        Join Us To Earn
      </div>
    </div>
  );
};

export default JoinUsSlider;
