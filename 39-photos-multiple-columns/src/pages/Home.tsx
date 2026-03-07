import { PhotoData, photos } from "@/data/photos";

function transformer(photo: PhotoData, index: number) {
  return (
    <div
      key={index}
      className="mb-6 break-inside-avoid rounded-xl overflow-hidden"
    >
      <img
        src={index % 2 == 0 ? photo.small : photo.large}
        alt={photo.title}
        className="w-full  h-auto  transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}
const Home = () => {
  const array = photos.map(transformer);
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="columns-1 sm:columns-2 lg:columns-3  gap-x-6">
        {array}
      </div>
    </div>
  );
};

export default Home;
