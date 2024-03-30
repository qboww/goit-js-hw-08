import { images } from "./js/images-array.js";

const galleryMarkup = images
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
  })
  .join("");

const openLightBox = (event) => {
  if (event.target.nodeName !== "IMG") return;

  basicLightbox
    .create(`<img src="${event.target.getAttribute("data-source")}"/>`)
    .show();
};

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", openLightBox);
