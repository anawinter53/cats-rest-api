const cats = require('../cats');

class Cat {
    constructor(cat) {
        this.id = cat.id;
        this.breed = cat.breed;
        this.name = cat.name;
    }

    static showAll() {
        return cats.map(c => new Cat(c));
    }

    static showRandom() {
        const randInt = Math.floor(Math.random() * cats.length);
        return new Cat(cats[randInt]);
    }

    static showByIndex(index) {
        const randCat = cats.find(c => c.id === index);
        if(randCat) {
            return new Cat(randCat)
        } else {
            throw "Cat not found"
        };
    }

    static add(cat) {
        console.log('add works')
        cat.id = cats.length + 1;
        cats.push(cat);
        return new Cat(cat);
    }

    update(data) {
        const updatedCat = cats.find(c => c.id === this.id);

        if(updatedCat) {
            updatedCat.breed = data.breed,
            updatedCat.name = data.name
            return new Cat (updatedCat)
        } else {
            throw "Cat not found"
        }
    }

    destroy() {
        const newCats = cats.filter(({id}) => id !== this.id);

        if(newCats) {
            return newCats;
        } else {
            throw "Cat not found"
        }
    }   


}

module.exports = Cat;
