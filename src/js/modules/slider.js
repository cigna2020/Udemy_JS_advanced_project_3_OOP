export default class Slider {       // можно сразу експортировать, чтобы не писать в конце. Наименование Class-ов пишется с большой буквы
    constructor(page, btns) {       // page - одна из страниц, сайт многостраничный; bnts - кнопки переключения элементов
        this.page = document.querySelector(page); // page / moduleapp - также и главный блок на странице (верстке)
        this.slides = this.page.children; //  слайды (отдельные div) внутри page / moduleapp
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;        // определяет индекс слайда
    }

    showSlides(n) {         // +1 или -1 слайд
        if (n > this.slides.length) {   // если n больше чем количество слайдов
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0'; // скрываем блок на третьем слайде

            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch (e) { }

        this.slides.forEach(slide => {
            slide.style.display = 'none';   // скрываем все слайды
        });
        this.slides[this.slideIndex - 1].style.display = 'block'; // показываем первый (нулевой) слайд
    }

    plusSlides(n) {                              // меняем слайды
        this.showSlides(this.slideIndex += n);
    }

    render() {
        try {
            this.hanson = document.querySelector('.hanson');        // обращаемся к блоку на третем слайде, который нужно показать через 3 сек. после открытия 3-го слайда
        } catch (e) { } // на случай ошибки, например такой блок отсутствует на странице

        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);                 // 1 - только для первой страницы, там только одна кнопка
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {   // обращаемся к лого (ссылка, вверхний левый угол) 
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}