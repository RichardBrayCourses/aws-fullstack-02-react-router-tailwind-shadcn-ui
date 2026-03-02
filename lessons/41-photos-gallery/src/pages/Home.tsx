import photos from "@/data/photos";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="mb-6 break-inside-avoid overflow-hidden rounded-xl"
          >
            <img
              src={photo.small}
              alt={photo.title}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
