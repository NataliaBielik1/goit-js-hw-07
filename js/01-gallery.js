import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onClickGallery);

function createGalleryItemMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<div class = "gallery__item">
<a class = "gallery__link">
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

function onClickGallery(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const galleryOriginal = event.target.dataset.src;

  const instance = basicLightbox.create(`<img src = ${galleryOriginal}>`, {
    closable: true,
    onShow: (instance) => {
      window.addEventListener("keydown", onClickEsc);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onClickEsc);
    },
  });

  instance.show();

  function onClickEsc(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}