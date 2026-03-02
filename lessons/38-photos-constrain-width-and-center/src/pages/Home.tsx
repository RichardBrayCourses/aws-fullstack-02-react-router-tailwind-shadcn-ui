import photos from "@/data/photos";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {photos.map((photo) => (
        <div key={photo.id} className="mb-8">
          <img src={photo.small} alt={photo.title} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
