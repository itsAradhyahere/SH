const videos = [
  { title: "Briquette", url: "https://media.istockphoto.com/id/473371665/video/large-sized-briquettes-arranged-into-packages.mp4" },
  { title: "Saw Dust", url: "https://media.istockphoto.com/id/648993746/video/sawdust-falling-onto-a-pile.mp4" },
  // Add more here...
];

const Gallery = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
    {videos.map((video, i) => (
      <div key={i} className="bg-white rounded-xl overflow-hidden shadow hover:scale-105 transition">
        <video src={video.url} controls className="w-full h-48 object-cover" />
        <p className="p-2 text-center text-sm font-semibold">{video.title}</p>
      </div>
    ))}
  </div>
);

export default Gallery;
