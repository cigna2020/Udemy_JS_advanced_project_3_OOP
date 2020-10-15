export default class Slider {       // можно сразу експортировать, чтобы не писать в конце. Наименование Class-ов пишется с большой буквы
    // constructor(page, btns) {       // page / container - одна из страниц, сайт многостраничный; bnts - кнопки переключения элементов
    constructor({ container = null, btns = null, next = null, prev = null } = {}) {       // передаем "", null или {} (дефолтные значения), что-бы небыло ошибки если не будет аргумента, container - одна из страниц, сайт многостраничный; bnts - кнопки переключения элементов
        this.container = document.querySelector(container); // page / moduleapp - также и главный блок на странице (верстке)
        this.slides = this.container.children; //  слайды (отдельные div) внутри page / moduleapp
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);       // кнопки для мини слайдеров
        this.next = document.querySelector(next);       // кнопки для мини слайдеров
        this.slideIndex = 1;        // определяет индекс слайда
    }
}