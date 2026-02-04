import { makeButton } from "./button.js";
import { renderPhotos } from "./gallery.js";

makeButton();

// Initial render
renderPhotos("");

const filterInput = document.getElementById("photo-filter");
if (filterInput) {
  filterInput.addEventListener("input", (e) => {
    renderPhotos(e.target.value);
  });
}
