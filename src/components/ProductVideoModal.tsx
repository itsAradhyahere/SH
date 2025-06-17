type ProductVideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
};

const ProductVideoModal = ({ isOpen, onClose, videoSrc }: ProductVideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl p-4">
        <video
          controls
          autoPlay
          className="w-full rounded-lg shadow-lg border-4 border-white"
          src={videoSrc}
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-600 rounded-full px-3 py-1 font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ProductVideoModal;
