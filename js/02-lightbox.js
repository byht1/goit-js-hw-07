import { galleryItems } from './gallery-items.js';
// Change code below this line

// ____________________Галерея________________________

const constructor = document.querySelector('.gallery');
const galleryImg = galleryItems
  .map(({ original, preview, description }) => {
    return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a></li>`;
  })
  .join('');

constructor.insertAdjacentHTML('beforeend', galleryImg);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', () => {
  gallery.defaultOptions.captionDelay = 250;
});
