class Brick {
    #element = null;
    someField = 'not null';
    
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    
    getSquare() {
        return this.height * this.width;
    }

    // get getSquareAsField() {
    //     return this.height * this.width;
    // }

    // create() {
    //     if (!this.#element) {
    //         let elem = document.createElement('div');

    //         elem.classList.add('brick');
    //         elem.style.width = `${10 * this.width}px`;
    //         elem.style.height = `${10 * this.height}px`;
    //         this.#element = elem;
    //         console.log('A Brick DOM element created!');
    //     } else {
    //         console.log('I already have one element');
    //     }
    // }

    // static render(elem) {
    //     if (!elem) throw('Element is not ready to rendering!')

    //     document.body.appendChild(elem);
    // }

    // static health() {
    //     return 'Yes, I\'m alive';
    // }

}