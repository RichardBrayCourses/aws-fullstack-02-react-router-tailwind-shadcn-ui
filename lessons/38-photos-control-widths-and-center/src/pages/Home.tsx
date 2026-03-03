import { PhotoData, photos } from "@/data/photos";

function transformer(photo: PhotoData, index: number) {
  return (
    <div key={index} className="mb-8">
      <img
        src={index % 2 == 0 ? photo.small : photo.large}
        alt={photo.title}
        className="w-full  h-auto"
      />
    </div>
  );
}
const Home = () => {
  const array = photos.map(transformer);
  return <div className="max-w-3xl mx-auto p-4">{array}</div>;
};

export default Home;
