import { PhotoData, photos } from "@/data/photos";

function transformer(photo: PhotoData, index: number) {
  return (
    <div
      key={index}
      className="mb-6 break-inside-avoid rounded-xl overflow-hidden group relative"
    >
      <img
        src={index % 2 === 0 ? photo.small : photo.large}
        alt={photo.title}
        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-white text-sm font-semibold">{photo.title}</div>
        <div className="text-white/80 text-xs">{photo.description}</div>
      </div>
    </div>
  );
}

const Home = () => {
  const array = photos.map(transformer);
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-6">{array}</div>
    </div>
  );
};

export default Home;
