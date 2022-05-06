import { galleryItems } from './gallery-items.js';

// ________________ Конструктор __________________

const gallery = document.querySelector('.gallery');
const imgGallery = galleryItems
  .map(x => {
    return `<div class="gallery__item">
  <a class="gallery__link" href='${x.original}'>
    <img
      class="gallery__image"
      src="${x.preview}"
      data-source="${x.original}"
      alt="${x.description}"
    />
  </a>
</div>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', imgGallery);

// __________ Делегирование __________________

gallery.addEventListener('click', eve => {
  eve.preventDefault();
  if (eve.target.closest('.gallery__link')) {
    const instance = basicLightbox.create(
      `<img src="${event.target.closest('img').dataset.source}" width="800" height="600">`
    );
    instance.show();
  }
  false;
});

// ______________Кнопка_______________

document.addEventListener('keyup', eve => {
  const isEscape = eve.code === 'Escape';
  const isActiv = document.querySelector('.basicLightbox');
  if (!isActiv) {
    return;
  }
  if (isEscape) {
    isActiv.remove();
  }
});
