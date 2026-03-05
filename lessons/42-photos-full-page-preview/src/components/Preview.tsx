import { PhotoData } from "@/data/photos";

interface PreviewProps {
  photo: PhotoData;
  setPhoto: (photo: PhotoData | null) => void;
}
const Preview = ({ photo, setPhoto }: PreviewProps) => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black p-4">
      <img
        src={photo.large}
        alt={photo.title}
        className="w-full h-full object-contain"
      />
      <button
        type="button"
        onClick={() => setPhoto(null)}
        className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 text-4xl font-bold opacity-40 hover:opacity-100 transition-opacity rounded-full bg-white/90 text-black"
      >
        <span className="-translate-y-0.5">×</span>
      </button>
    </div>
  );
};

export default Preview;
