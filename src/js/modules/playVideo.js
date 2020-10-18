export default class VideoPlayer {
    constructor(triggers, overlay) {                // triggers - кнопка play, overlay - модальное окно
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);     // блок с классами для видео
        this.close = this.overlay.querySelector('.close'); // в модальном окне есть класс close - закрытие окна
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);     // привязывем контекст вызова чтобы небыло ошибки в createPlayer() в events: {'onStateChange': this.onPlayerStateChange}
    }

    bindTriggers() {

        this.btns.forEach((btn, i) => {
            try {
                const blockedElem = btn.closest('.module__video-item').nextElementSibling;       // пропускаем "заблокированные" кнопки плеера
                if (i % 2 == 0) {       // каждый второй элемент (кнопка-плеер)
                    blockedElem.setAttribute('data-disabled', 'true');
                }
            } catch (e) { }

            btn.addEventListener('click', () => {
                if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
                    this.activeBtn = btn;       // отслеживаем активную кнопку
                    if (document.querySelector('iframe#frame')) {  // если документ имеет тег iframe с id frame, т.е, если плеер уже запущен
                        this.overlay.style.display = 'flex';  // показываем блок
                        if (this.path !== btn.getAttribute('data-url')) {
                            this.path = btn.getAttribute('data-url');  // id video указан в вверстке, как дата атрибут кнопки
                            this.player.loadVideoById({ videoId: this.path });
                        }
                    } else {
                        this.path = btn.getAttribute('data-url');  // id video указан в вверстке, как дата атрибут кнопки

                        this.createPlayer(this.path);

                    }
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
            videoId: `${url}`,    // уникальный id видео, которое на youtube
            events: {
                'onStateChange': this.onPlayerStateChange       // отслеживаем состояние плеера
            }
        });

        this.overlay.style.display = 'flex';  // показываем блок
    }

    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;       // closest - получить ближайшего соседа ниже или сам элемент
            const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);        // копируем svg иконку, парамент - true - глубокое копирование

            if (state.data === 0) {           // state.data - состояние плеера, 0 - просмотр завершен, https://developers.google.com/youtube/iframe_api_reference?hl=ru
                if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {  // убираем затемнее с неактивной кнопки плей
                    blockedElem.querySelector('.play__circle').classList.remove('closed');      // убираем затемнее с неактивной кнопки плей
                    blockedElem.querySelector('svg').remove();                                  // удаляем иконку замочка с плеера
                    blockedElem.querySelector('.play__circle').appendChild(playBtn);            // добавляем иконку плей
                    blockedElem.querySelector('.play__text').textContent = 'play video';        // меняем текст с "просмотрите предыдущее..." на "плей Видео"
                    blockedElem.querySelector('.play__text').classList.remove('attention');
                    blockedElem.style.opacity = 1;
                    blockedElem.style.filter = 'none';

                    blockedElem.setAttribute('data-disabled', 'false'); // меняем статут дата-атрибута и делаем доступным видео
                }
            }
        } catch (e) { }
    }

    init() {
        if (this.btns.length > 0) {
            const tag = document.createElement('script');           // подключаем youtube player, код с https://developers.google.com/youtube/iframe_api_reference?hl=ru
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        this.bindTriggers();
        this.bindClose();
    }
}
