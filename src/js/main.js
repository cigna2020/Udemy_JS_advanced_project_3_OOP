import Slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');     // slider - экземпляр класса
    slider.render();        // вызываем метод класса, который обьеденяе все функции которые прописаны в классе
});