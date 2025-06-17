import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Hero from "./components/Hero";
import ClimateClock from "./components/ClimateClock";
import Products from "./components/ProductLineBar";
import DealerCTA from "./components/DealerCTA";
import WhatsAppChat from "./components/WhatsAppChat";
import Footer from "./components/Footer";
import TrackOrderIcon from "./components/TrackOrderIcon";
import ProductVideoModal from "./components/ProductVideoModal";

// Pages
import ProductRecommender from "./pages/ProductRecommender";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>("");

  // Show modal with selected video
  // (openVideoModal removed as it was unused)

  const closeVideoModal = () => {
    setModalOpen(false);
    setVideoSrc("");
  };

  return (
    <Router>
      <div className="font-sans bg-black text-white">
        {/* Static Components */}
        <Hero />
        <ClimateClock />
        <Products />
        <DealerCTA />
        <WhatsAppChat />
        <Footer />
        <TrackOrderIcon />

        {/* Show only if modal should be open */}
        {isModalOpen && videoSrc && (
          <ProductVideoModal
            isOpen={isModalOpen}
            onClose={closeVideoModal}
            videoSrc={videoSrc}
          />
        )}

        {/* Routes */}
        <Routes>
          <Route path="/recommend" element={<ProductRecommender />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
