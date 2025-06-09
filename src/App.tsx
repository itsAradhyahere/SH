import Hero from "./components/Hero";
import ClimateClock from "./components/ClimateClock";
import Products from "./components/ProductLineBar";
import DealerCTA from "./components/DealerCTA";
import WhatsAppChat from "./components/WhatsAppChat";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-black text-white">
      <Hero />
      <ClimateClock />
      <Products />
      <DealerCTA />
      <WhatsAppChat />
      <Footer />
    </div>
  );
};

export default App;
