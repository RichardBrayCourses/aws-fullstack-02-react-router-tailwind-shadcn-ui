import { getPhotos } from "./photos.js";

/**
 * Renders filtered photos inside #images-location.
 * @param {string} filterText
 */
export function renderPhotos(filterText = "") {
  const imagesLocation = document.getElementById("images-location");
  if (!imagesLocation) return;

  // Ensure gallery container exists inside images-location
  let gallery = document.getElementById("photo-gallery");
  if (!gallery) {
    gallery = document.createElement("div");
    gallery.id = "photo-gallery";
    imagesLocation.appendChild(gallery);
  }

  const filtered = getPhotos(filterText);

  // Clear previous render
  gallery.innerHTML = "";

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "photo-card";

    const img = document.createElement("img");
    img.src = p.small;
    img.alt = p.title;
    img.loading = "lazy";

    const title = document.createElement("h3");
    title.textContent = p.title;

    const desc = document.createElement("p");
    desc.textContent = p.description;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);

    gallery.appendChild(card);
  });
}
