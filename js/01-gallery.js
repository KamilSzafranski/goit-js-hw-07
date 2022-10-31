import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const createGallery = (element) => {
  const galleryItem = `<a class="gallery__link" href="${element.original}">
  <img
    class="gallery__image"
    src="${element.preview}"
    data-source="${element.original}"
    alt="${element.description}"
  />
</a>`;
  gallery.insertAdjacentHTML("beforeend", galleryItem);
};

const modal = (event) => {
  event.preventDefault();

  const closeModal = (event) => {
    if (event.code === "Escape") {
      return basicLightboxElement.close();
    }
    return;
  };
  const basicLightboxElement = basicLightbox.create(
    `<img width="1400" height="900" src="${event.target.dataset.source}">`,
    {
      onShow: () => document.addEventListener("keydown", closeModal),
    }
  );

  basicLightboxElement.show();
};

galleryItems.forEach(createGallery);
gallery.addEventListener("click", modal);
