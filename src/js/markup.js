import template from '../templates/gallery-item.hbs';
import foods from '../menu.json';

const galleryRef = document.querySelector('.js-menu');
// console.log(galleryRef)

const markup = template(foods);

galleryRef.insertAdjacentHTML('beforeend', markup);