import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Forms from './modules/forms';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    // const slider = new Slider('.page', '.next');     // slider - экземпляр класса
    const slider = new MainSlider({ btns: '.next', container: '.page' });
    slider.render();        // вызываем метод класса, который обьеденяе все функции которые прописаны в классе

    const modulePageSlider = new MainSlider({ container: '.moduleapp', btns: '.next' });     // слайдер для второй страницы сайта
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider', // class в котором размещены все слайдеры блока
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init(); // вызываем метод init с MiniSlider

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider', // class в котором размещены все слайдеры блока
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider', // class в котором размещены все слайдеры блока
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    });
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();   // альтернативный метод вызова, без создания переменной

    new Forms('.form').init();

    new ShowInfo('.plus__content').init();

    new Download('.download').init();
});