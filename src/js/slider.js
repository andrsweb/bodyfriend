import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';

const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	slidesPerView: 3, // показывать по 3 превью
	spaceBetween: 24, // расстояние между слайдами
	modules: [Thumbs],
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 32, // расстояние между слайдами
	mousewheel: true,
	modules: [Thumbs],
	grabCursor: true, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
});

