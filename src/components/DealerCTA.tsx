import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DealerCTA = () => {
  return (
    <section className="bg-green-700 py-16 px-4 text-white text-center">
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold"
      >
        Become a Dealer Today!
      </motion.h2>
      <p className="mt-4 max-w-xl mx-auto text-lg">
        Join our bio-energy mission and be part of a sustainable future.
      </p>
      <Link
        to="/dealer-registration"
        className="mt-6 inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-full hover:scale-105 transition"
      >
        Register Now
      </Link>
    </section>
  );
};

export default DealerCTA;
