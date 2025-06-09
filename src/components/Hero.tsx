import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white bg-black/60 backdrop-blur-md p-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
        >
          Revolutionizing BioEnergy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-xl"
        >
          Clean energy from wood pellets, briquettes, and sustainable biomass solutions.
        </motion.p>

        <motion.a
          href="#products"
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center gap-2"
        >
          Explore Products <FaArrowRight />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
