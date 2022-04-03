import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
        </a>
    </div>
    `
}).join('')

galleryList.insertAdjacentHTML('afterbegin', markup);

galleryList.addEventListener("click", onModalOpenImg);


function onModalOpenImg(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }
    const largeImg = event.target.dataset.source
    createModalWindow(largeImg)

}

function createModalWindow(url) {
    const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`)
    const onModalClose = ((event) => {
        if (event.code === 'Escape') {
            instance.close()
        }
    })
    instance.show()
    window.addEventListener('keydown', onModalClose);

}

