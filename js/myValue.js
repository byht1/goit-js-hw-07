import { galleryItems } from './gallery-items.js';

// __________________________Сетка________________________

const galleryNet = document.querySelector('.gallery');
const galleryHtml = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
});

galleryNet.insertAdjacentHTML('beforeend', galleryHtml.join(''));

// ______________________Магия____________________
// отключаем ссылку
galleryNet.addEventListener('click', () => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const urlPhoto = event.target.dataset.source;
  const altPhoto = event.target.getAttribute('alt');
  const max = `<div class="gallery-big">
  <img
    class="gallery-big__photo"
    src="${urlPhoto}"
    alt="${altPhoto}"
    width="800"
    height="600"
  />
</div>`;

  galleryNet.insertAdjacentHTML('afterend', max);
  const modal = document.querySelector('.gallery-big');
  const modalImg = modal.firstElementChild;

  setTimeout(function () {
    modal.classList.add('vis');
    modalImg.classList.add('vis');
  }, 1);
});

document.addEventListener('keyup', () => {
  const modal = document.querySelector('.gallery-big');
  const modalImg = modal.firstElementChild;
  if (!modal) {
    return;
  }
  const isEscape = event.code === 'Escape';

  if (isEscape) {
    modalImg.classList.remove('vis');
    setTimeout(function () {
      modal.remove();
    }, 150);
  }
});

document.addEventListener('click', () => {
  const modal = document.querySelector('.gallery-big');
  const modalImg = modal.firstElementChild;
  if (!modal) {
    return;
  }
  if (event.target === modal) {
    modalImg.classList.remove('vis');
    setTimeout(function () {
      modal.remove();
    }, 150);
  }
});
