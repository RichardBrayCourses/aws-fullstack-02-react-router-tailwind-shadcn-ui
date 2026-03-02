import photos from "@/data/photos";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-6">
        {photos.map((photo) => (
          <figure
            key={photo.id}
            className="mb-6 break-inside-avoid overflow-hidden rounded-xl"
          >
            <div className="group relative">
              <img
                src={photo.small}
                alt={photo.title}
                className="w-full h-auto block"
                loading="lazy"
              />

              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-white text-sm font-medium leading-snug">
                  {photo.title}
                </div>
                <div className="text-white/80 text-xs leading-snug">
                  {photo.description}
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Home;
