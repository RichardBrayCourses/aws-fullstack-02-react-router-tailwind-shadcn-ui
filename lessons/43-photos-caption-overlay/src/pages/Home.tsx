import photos from "@/data/photos";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-6">
        {photos.map((photo) => (
          <figure
            key={photo.id}
            className="mb-6 break-inside-avoid overflow-hidden rounded-xl group relative"
          >
            <img
              src={photo.small}
              alt={photo.title}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-sm font-semibold">
                {photo.title}
              </div>
              <div className="text-white/80 text-xs">{photo.description}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
