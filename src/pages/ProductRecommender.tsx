import  { useState } from 'react';

const ProductRecommender = () => {
  const [industry, setIndustry] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleRecommend = () => {
    if (industry === 'soil') setRecommendation('We recommend: BioChar or Bamboo Powder');
    else if (industry === 'boiler') setRecommendation('We recommend: Briquettes or Pellets');
    else setRecommendation('Please select an application');
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl mb-4">Smart Product Recommender</h2>
      <select className="border p-3 rounded mb-4" onChange={(e) => setIndustry(e.target.value)}>
        <option value="">Select Application</option>
        <option value="soil">Soil Enrichment</option>
        <option value="boiler">Boiler Fuel</option>
      </select>
      <br />
      <button onClick={handleRecommend} className="bg-green-600 text-white px-4 py-2 rounded mt-2">
        Recommend
      </button>
      <p className="mt-4 text-lg font-semibold">{recommendation}</p>
    </div>
  );
};

export default ProductRecommender;
