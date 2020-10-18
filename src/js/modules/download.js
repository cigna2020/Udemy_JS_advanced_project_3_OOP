export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';    // путь  к файлу, который будет скачан
    }

    downloadItem(path) {
        const element = document.createElement('a');        // делаем ссылку
        element.setAttribute('href', path);
        element.setAttribute('download', 'name_picture'); // name_picture - название файла
        element.style.display = 'none';                    // чтобы пользователь не видел ссылку
        document.body.appendChild(element);

        element.click(); // вызываем событие клик

        document.body.removeChild(element); // убираем ссылку, после того, как она отработала
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.downloadItem(this.path);
            });
        });

    }
}