import photos from "@/data/photos";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.small}
          alt={photo.title}
          className="w-full h-auto"
        />
      ))}
    </div>
  );
}
