// src/pages/HomePage.tsx

import MainVideoSlider from "../components/sliders/MainVideoSlider";
import SamarthSlider from "../components/sliders/SamarthSlider";
import JoinUsSlider from "../components/sliders/JoinUsSlider";
import ProductLineBar from "../components/ProductLineBar";
import WhatsAppEmailCTA from "../components/WhatsAppChat";
// import WeCareFor from "../components/WeCareFor";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <WhatsAppEmailCTA />
      
      <ProductLineBar />

      {/* Sliders stacked vertically with spacing */}
      <section className="space-y-16 mt-8">
        <MainVideoSlider />
        <SamarthSlider />
        <JoinUsSlider />
      </section>

      
    </main>
  );
};

export default HomePage;
