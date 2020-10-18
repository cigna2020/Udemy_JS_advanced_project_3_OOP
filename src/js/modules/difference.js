export default class Difference {
    constructor(oldOfficer, newOfficer, items) {    // oldOfficer - первый столбик, newOfficer - второй столбик, items - селектор (class)
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.items = items;
            this.oldCounter = 0;        // считаем сколько карточек уже показано
            this.newCounter = 0;
        } catch (e) { }
    }

    bindTriggers(container, items, counter) {        // вместо закоментированного ниже, оптимизация кода
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                counter++;
            } else {
                items[counter].style.display = 'flex';
                items[items.length - 1].remove(); // удаляем последний блок с плюсиком если отображены все блоки
            }
        });
    }
    // bindTriggers() {
    //     this.oldOfficer.querySelector('.plus').addEventListener('click', () => {
    //         if (this.oldCounter !== this.oldItems.length - 2) {
    //             this.oldItems[this.oldCounter].style.display = 'flex';
    //             this.oldCounter++;
    //         } else {
    //             this.oldItems[this.oldCounter].style.display = 'flex';
    //             this.oldItems[this.oldItems.length - 1].remove(); // удаляем последний блок с плюсиком если отображены все блоки
    //         }
    //     });

    //     this.newOfficer.querySelector('.plus').addEventListener('click', () => {
    //         if (this.newCounter !== this.newItems.length - 2) {
    //             this.newItems[this.newCounter].style.display = 'flex';
    //             this.newCounter++;
    //         } else {
    //             this.newItems[this.newCounter].style.display = 'flex';
    //             this.newItems[this.newItems.length - 1].remove(); // удаляем последний блок с плюсиком если отображены все блоки
    //         }
    //     });
    // }

    hideItems(items) {
        items.forEach((item, i, arr) => {  // вместо закоментированного ниже, оптимизация кода
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
        // this.oldItems.forEach((item, i, arr) => {  // ищем последнюю карточку (карточка с плюсиком)
        //     if (i !== arr.length - 1) {
        //         item.style.display = 'none';
        //     }
        // });
        // this.newItems.forEach((item, i, arr) => {  // ищем последнюю карточку (карточка с плюсиком)
        //     if (i !== arr.length - 1) {
        //         item.style.display = 'none';
        //     }
        // });
    }

    init() {
        try {
            // this.hideItems();
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            // this.bindTriggers();
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        } catch (e) { }
    }
}

