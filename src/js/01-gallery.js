import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const renderGalleryMarkup = gallery => {
  const markup = gallery.reduce((acc, { original, preview, description }) => {
    acc += `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div >`;
    return acc;
  }, ``);
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
};

function onEscapeBtnClick(e) {
  if (e.key === 'Escape') {
    modalImage.close();
  }
}

renderGalleryMarkup(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 180,
  animationSlide: true
});




