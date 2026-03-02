import { useMemo, useState } from "react";
import photos from "@/data/photos";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Photo = (typeof photos)[number];

export default function Home() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Photo | null>(null);

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

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
          No matches. Try a different search.
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-6">
          {filtered.map((photo) => (
            <button
              key={photo.id}
              type="button"
              className="mb-6 break-inside-avoid overflow-hidden rounded-xl group relative block w-full text-left"
              onClick={() => setSelected(photo)}
              aria-label={`Open ${photo.title}`}
            >
              <img
                src={photo.small}
                alt={photo.title}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white text-sm font-semibold">
                  {photo.title}
                </div>
                <div className="text-white/80 text-xs">{photo.description}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="max-w-none w-[95vw] p-0 overflow-hidden">
          {selected && (
            <div className="bg-black">
              <img
                src={selected.large}
                alt={selected.title}
                className="max-h-[85vh] w-full object-contain"
              />
              <div className="p-4">
                <div className="text-white text-sm font-semibold">
                  {selected.title}
                </div>
                <div className="text-white/70 text-xs">
                  {selected.description}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
