const photos = [
  {
    id: "photo-1500530855697-b586d89ba3ee",
    title: "Misty Forest",
    description: "Soft light over a quiet evergreen canopy.",
    small:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    large:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: "photo-1470770841072-f978cf4d019e",
    title: "Mountain Trail",
    description: "A winding path through alpine terrain.",
    small:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    large:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: "photo-1469474968028-56623f02e42e",
    title: "City Glow",
    description: "Evening light across a lively skyline.",
    small:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    large:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: "photo-1494526585095-c41746248156",
    title: "Desert Lines",
    description: "Warm dunes shaped by the wind.",
    small:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
    large:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: "photo-1482192596544-9eb780fc7f66",
    title: "Ocean Cliff",
    description: "Waves rolling into rugged coastline.",
    small:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=600&q=80",
    large:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: "photo-1500534314209-a25ddb2bd429",
    title: "Golden Field",
    description: "Late sun over a wide open meadow.",
    small:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    large:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2200&q=90",
  },
];

/**
 * Returns photos filtered by title OR description containing filterText (case-insensitive).
 * Pure function: does not mutate photos.
 * @param {string} filterText
 * @returns {Array}
 */
export function getPhotos(filterText = "") {
  const needle = filterText.trim().toLowerCase();

  if (!needle) return photos.slice(); // return a copy

  return photos.filter(
    (p) =>
      p.title.toLowerCase().includes(needle) ||
      p.description.toLowerCase().includes(needle),
  );
}
