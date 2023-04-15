import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
// galleryContainer.addEventListener("click", onClickGallery);

function createGalleryItemMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
<a class = "gallery__item" href="${original}">
  <img
  class = "gallery__image"
  src = "${preview}"
  alt = "${description}"
  data-src = "${original}">
  </img>
</a>
    </div>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery__item", { captionDelay: 250 });
