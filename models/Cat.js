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

    static create(newCat) {
        //create newCat in cat controller
        newCat.id = cats.length + 1;
        cats.push(newCat);
        return new Cat(newCat);
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

    del(index) {
        const deletedCat = cats.find(c => c.id === index);
        const idx = cats.indexOf(deletedCat)
        const idxOf = parseInt(cats[idx])

        if(deletedCat) {
            cats.splice(idxOf, 1)
            return ""
        } else {
            throw "Cat not found"
        }
    }   


}

module.exports = Cat;
