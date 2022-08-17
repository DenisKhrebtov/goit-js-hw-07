import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector('.gallery');

function createGallary(items) {
  return items
    .map(({ original, preview, description }) => {
      return `<div class="gallery_item">
        <a class="galery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join('');
}

const cardsMarkup = createGallary(galleryItems);

divRef.insertAdjacentHTML('beforeend', cardsMarkup);

divRef.addEventListener('click', onImageClick);

console.log(cardsMarkup);
