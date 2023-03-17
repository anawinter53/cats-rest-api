const cats = require('../cats');

class Cat {
    constructor(cat) {
        this.breed = cat.breed;
        this.name = cat.name;
    }

    showAll() {
        console.log('All cats');
        return cats;
    }

    showRandom() {
        console.log('One cat here');
        return cats;
    }

    showByIndex() {
        console.log('changed cat here');
        return cats;
    }

    create() {
        console.log('created cat')
        return cats;
    }

    update(data) {
        console.log('changed cat');
        return cats
    }

    del(data) {
        console.log('deleted cat');
        return cats
    }   


}

module.exports = Cat
