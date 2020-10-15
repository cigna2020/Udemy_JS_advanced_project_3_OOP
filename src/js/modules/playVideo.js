export default class VideoPlayer {
    constructor(triggers, overlay) {                // triggers - кнопка play, overlay - модальное окно
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);     // блок с классами для видео
        this.close = this.overlay.querySelector('.close'); // в модальном окне есть класс close - закрытие окна
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) {  // если документ имеет тег iframe с id frame, т.е, если плеер уже запущен
                    this.overlay.style.display = 'flex';  // показываем блок
                } else {
                    const path = btn.getAttribute('data-url');  // id video указан в вверстке, как дата атрибут кнопки

                    this.createPlayer(path);

                }
            });
        });
    }


    bindClose() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';  // скрываем блок с видео
            this.player.stopVideo();        // stopVideo - метод с API, https://developers.google.com/youtube/iframe_api_reference?hl=ru 
        });
    }

    createPlayer(url) {                     // создаем youtube player, код с https://developers.google.com/youtube/iframe_api_reference?hl=ru
        this.player = new YT.Player('frame', {      // frame = class из index.html 
            height: '100%',
            width: '100%',
            videoId: `${url}`    // уникальный id видео, которое на youtube
        });

        console.log(this.player);
        this.overlay.style.display = 'flex';  // показываем блок
    }

    init() {
        const tag = document.createElement('script');           // подключаем youtube player, код с https://developers.google.com/youtube/iframe_api_reference?hl=ru
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindClose();
    }
}