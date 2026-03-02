import photos from "@/data/photos";

export default function Home() {
  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.small} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}
