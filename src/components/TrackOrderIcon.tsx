// src/components/TrackOrderIcon.tsx

import { Truck } from 'lucide-react';

const TrackOrderIcon = () => {
  return (
    <a
      href="/track-order"
      className="fixed top-5 right-5 bg-green-600 text-white p-3 rounded-full shadow-xl hover:bg-green-700 z-50"
      title="Track Your Order"
    >
      <Truck size={24} />
    </a>
  );
};

export default TrackOrderIcon;
