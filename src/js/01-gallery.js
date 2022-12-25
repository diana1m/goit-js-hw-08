// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description})=>
    `
        <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"/>
        </a> 
    `
).join("")

galleryBox.insertAdjacentHTML("beforeend", markup);

var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});


console.log(galleryItems);
console.log(SimpleLightbox);