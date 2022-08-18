import { galleryItems } from './gallery-items.js';
// Change code below this line

const divRef = document.querySelector('.gallery');
const cardsMarkup = createGallary(galleryItems);

divRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createGallary(items) {
  return items
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" 
            href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
            />
            </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
