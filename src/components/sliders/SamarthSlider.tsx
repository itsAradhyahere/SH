// src/components/sliders/SamarthSlider.tsx
import { useEffect, useRef } from "react";


const samarthVideos = [
  "/videos/samarth1.mp4",
  "/videos/samarth2.mp4",
  "/videos/samarth3.mp4",
];

const SamarthSlider = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      indexRef.current = (indexRef.current + 1) % samarthVideos.length;
      video.src = samarthVideos[indexRef.current];
      video.play();
    };

    video.addEventListener("ended", handleEnded);

    video.src = samarthVideos[0];
    video.play();

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-green-500">
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        className="w-full h-auto object-cover aspect-video"
      />
      <div className="absolute bottom-6 left-6 text-white bg-green-900 bg-opacity-60 px-4 py-2 rounded-md font-bold text-lg md:text-xl">
        SAMARTH Initiative
      </div>
    </div>
  );
};

export default SamarthSlider;
