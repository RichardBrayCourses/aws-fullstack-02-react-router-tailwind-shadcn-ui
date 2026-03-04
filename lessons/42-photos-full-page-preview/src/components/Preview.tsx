import { PhotoData } from "@/data/photos";

interface PreviewProps {
  photo: PhotoData;
  setPhoto: (photo: PhotoData | null) => void;
}
const Preview = ({ photo, setPhoto }: PreviewProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-background p-6 flex items-center justify-center">
      <div className="relative">
        <button
          type="button"
          onClick={() => setPhoto(null)}
          className="absolute top-4 right-4 z-10 text-4xl font-bold opacity-40 hover:opacity-100 transition-opacity text-white"
        >
          ×
        </button>

        <div className="bg-black rounded-xl overflow-hidden">
          <img
            src={photo.large}
            alt={photo.title}
            className="max-w-[90vw] max-h-[85vh] w-full object-contain"
          />
          <div className="p-4">
            <div className="text-white text-sm font-semibold">
              {photo.title}
            </div>
            <div className="text-white/70 text-xs">{photo.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
