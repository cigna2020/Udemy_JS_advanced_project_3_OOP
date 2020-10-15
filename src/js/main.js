import Slider from './modules/slider';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');     // slider - экземпляр класса
    slider.render();        // вызываем метод класса, который обьеденяе все функции которые прописаны в классе

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});