import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
        <a class="gallery__item" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
    />
        </a>
    `
}).join('')

galleryList.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', { overlayOpacity: 0.8, captionsData: 'alt', captionDelay: 250, showCounter: false });

// lightbox.on('shown.simplelightbox', (e) => {
//     const backgroundOverlay = document.querySelector('.sl-overlay').style.backgroundColor = '#212122'
// })
