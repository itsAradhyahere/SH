// src/components/HomePageVideoSlider.tsx
import { useEffect, useRef, useState } from "react";



const videoSlides = [
  // Problem videos
  {
    src: "/src/videos/biochar.mp4",
    alt: "Coal-fired power station",
    title: "The Problem: Coal & Pollution",
    description: "Coal burning is a major contributor to CO2 emissions."
  },
  {
    src: "https://media.istockphoto.com/videos/field-of-crops-on-fire-aerial-view-from-a-helicopter-flying-in-a-brownish-gray-smoke-gm1417311773-464501903.mp4",
    alt: "Burning agricultural residue",
    title: "The Problem: Burning Agricultural Residue",
  },
  // ShuHaRi solutions - pellet, briquette, bamboo etc
  {
    src: "https://media.istockphoto.com/id/473371665/video/large-sized-briquettes-arranged-into-packages.mp4",
    alt: "Wood Briquettes",
    title: "Wood Briquettes: Sustainable Biofuel",
  },
  {
    src: "https://media.istockphoto.com/id/648993746/video/sawdust-falling-onto-a-pile.mp4",
    alt: "Saw Dust",
    title: "Sawmill Residues Reused",
  },
  {
    src: "https://media.istockphoto.com/id/1208998453/video/close-up-footage-of-cut-organic-bamboo-poles-ready-to-be-processed-into-sustainable-gm1208998453-349627687.mp4",
    alt: "Bamboo",
    title: "Bamboo Powder & Products",
  },
  {
    src: "https://media.istockphoto.com/id/998895470/video/black-charcoal-texture-background-gm998895470-270167428.mp4",
    alt: "Biochar",
    title: "Biochar: Carbon Sequestration",
  },
  // Care for people, forest & climate
  {
    src: "https://media.istockphoto.com/videos/aerial-calm-surface-of-a-lake-in-the-forest-reflecting-the-beautiful-mount-hood-in-gm864526000-241759649.mp4",
    alt: "Calm Forest Lake",
    title: "We Care for People, Forest, Soil & Climate",
  },
  {
    src: "https://media.istockphoto.com/videos/hands-hugging-a-tree-trunk-covered-with-green-moss-in-the-woods-people-in-nature-gm1404889987-456977712.mp4",
    alt: "Hands Hugging Tree",
    title: "Join Us in Our Mission",
  },
  // Join us CTA
  {
    src: "https://media.istockphoto.com/videos/india-map-with-indian-flag-zooming-in-from-the-space-through-a-photo-real-animated-gm1395135339-450357789.mp4",
    alt: "Join Us Call to Action",
    title: "Join Us to Fight Climate Change Right Now",
  },
];

const HomePageVideoSlider = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSlides.length);
    };

    video.addEventListener("ended", handleEnded);

    // Set initial video src
    video.src = videoSlides[currentIndex].src;
    video.play();

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-green-600">
      <video
        ref={videoRef}
        className="w-full h-auto object-cover aspect-video"
        muted
        playsInline
        autoPlay
        preload="auto"
      />
      <div className="absolute bottom-10 left-10 bg-black bg-opacity-50 rounded-md p-4 max-w-md">
        <h2 className="text-white text-2xl font-bold drop-shadow-md">
          {videoSlides[currentIndex].title}
        </h2>
        {videoSlides[currentIndex].description && (
          <p className="text-gray-300 mt-2">{videoSlides[currentIndex].description}</p>
        )}
      </div>
    </div>
  );
};

export default HomePageVideoSlider;
