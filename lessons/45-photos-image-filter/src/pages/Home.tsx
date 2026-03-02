import { useMemo, useState } from "react";
import photos from "@/data/photos";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return photos;
    return photos.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="mb-6">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search photos..."
        />
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-6">
        {filtered.map((photo) => (
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
