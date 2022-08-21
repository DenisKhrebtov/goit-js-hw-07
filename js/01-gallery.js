import { galleryItems } from './gallery-items.js';
// Change code below this line

const divRef = document.querySelector('.gallery');

const cardsMarkup = createGallary(galleryItems);

divRef.insertAdjacentHTML('beforeend', cardsMarkup);
divRef.addEventListener('click', onImageClick);

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

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  onShow: () => {
    document.addEventListener('keydown', onKeyAction);
  },
    function onKeyAction(event) {
      if (event.key === 'Escape') {
        instance.close();
      }
    };
}
// divRef.addEventListener('keydown', event => {
//   if (event.code === 'Tab') {
//     instance.close();
//   }
