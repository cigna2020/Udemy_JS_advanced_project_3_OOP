export default class Slider {       // можно сразу експортировать, чтобы не писать в конце. Наименование Class-ов пишется с большой буквы
    // constructor(page, btns) {       // page - одна из страниц, сайт многостраничный; bnts - кнопки переключения элементов
    constructor({ page = "", btns = "", next = "", prev = "" } = {}) {       // передаем "" или {} (дефолтные значения), что-бы небыло ошибки если не будет аргумента, page - одна из страниц, сайт многостраничный; bnts - кнопки переключения элементов
        this.page = document.querySelector(page); // page / moduleapp - также и главный блок на странице (верстке)
        this.slides = this.page.children; //  слайды (отдельные div) внутри page / moduleapp
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;        // определяет индекс слайда
    }
}