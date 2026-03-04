import { Input } from "@/components/ui/input";
import { PhotoData, photos } from "@/data/photos";
import { useState } from "react";

function transformer(photo: PhotoData, index: number) {
  return (
    <div
      key={index}
      className="mb-6 break-inside-avoid rounded-xl overflow-hidden group relative"
    >
      <img
        src={index % 2 === 0 ? photo.small : photo.large}
        alt={photo.title}
        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 duration-700 ">
        <div className="text-white text-sm font-semibold">{photo.title}</div>
        <div className="text-white/80 text-xs">{photo.description}</div>
      </div>
    </div>
  );
}

const noMatches = () => (
  <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
    No matches. Try a different search.
  </div>
);

const match = (photo: PhotoData, query: string): boolean => {
  const titleMatch = photo.title.toLowerCase().includes(query);
  const descriptionMatch = photo.description.toLowerCase().includes(query);
  return titleMatch || descriptionMatch;
};

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const query = searchText.trim().toLowerCase();

  const filtered = photos.filter((photo) => match(photo, query));

  return (
    <div className="max-w-5xl mx-auto p-4 ">
      <div className="mb-6">
        <Input
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search photos..."
        />
      </div>
      {query && !filtered.length && noMatches()}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-6">
        {filtered.map(transformer)}
      </div>
    </div>
  );
};

export default Home;
