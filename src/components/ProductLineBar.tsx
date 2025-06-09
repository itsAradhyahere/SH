// src/components/ProductLineBar.tsx

import { FaLeaf } from "react-icons/fa";

const products = [
  "Saw Dust",
  "Wood Chips",
  "Rice Straw & Husk",
  "Wood Pellets",
  "Briquette",
  "Bamboo",
  "Biochar",
];

const ProductLineBar = () => (
  <div className="bg-gradient-to-r from-green-700 via-green-500 to-green-700 py-4 shadow-lg">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
      {products.map((prod) => (
        <div
          key={prod}
          className="flex items-center gap-2 px-4 py-2 bg-green-900 bg-opacity-40 rounded-md shadow-md text-xl md:text-2xl font-extrabold tracking-wider uppercase cursor-default hover:bg-green-800 transition duration-300"
        >
          <FaLeaf className="text-green-300" />
          {prod}
        </div>
      ))}
    </div>
  </div>
);

export default ProductLineBar;
