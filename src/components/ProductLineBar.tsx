import { useState } from "react";
import ProductVideoModal from "./ProductVideoModal";

const products = [
  { name: "SAW DUST", video: "/src/videos/sawdust.mp4" },
  { name: "WOOD CHIPS", video: "/src/videos/woodchips.mp4" },
  { name: "RICE STRAW & HUSK", video: "https://example.com/rice-straw.mp4" },
  { name: "WOOD PELLETS", video: "/src/videos/wood-pellets.mp4" },
  { name: "BRIQUETTE", video: "/src/videos/briquette.mp4" },
  { name: "BAMBOO", video: "/src/videos/bamboo.mp4" },
  { name: "BIOCHAR", video: "/src/videos/biochar.mp4" },
];

const ProductLineBar = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="py-8 bg-gradient-to-r from-green-700 to-green-500 text-white text-center">
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedVideo(product.video)}
            className="bg-green-800 hover:bg-green-600 transition px-6 py-3 rounded-lg shadow-lg font-bold flex items-center gap-2"
          >
            🌿 {product.name}
          </button>
        ))}
      </div>

      {/* Video Modal */}
      <ProductVideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoSrc={selectedVideo || ""}
      />
    </div>
  );
};

export default ProductLineBar;
