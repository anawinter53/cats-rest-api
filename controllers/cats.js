const Cat = require('../models/Cat');

//function connects to show all, show by index functions
async function index (req, res) {
    try{
        const cats = await Cat.showAll();
        res.send(cats)
    } catch(err) {
        res.status(500).send({error: "Server error"})
    }
}

//connects to show random function
async function random (req, res) {
    try {
        const cat = await Cat.showRandom()
        res.status(200).send(cat)
    } catch(err) {
        res.status(500).send({error: "Server error"})
    }
}

//connects to show index function
async function specific (req, res) {
    const index = parseInt(req.params.id)

    try {
        const cat = await Cat.showByIndex(index);
        res.status(200).send(cat)
    } catch(err) {
        res.status(404).send({error: "Cat not found"})
    }

}

//connects to create function
async function create (req, res) {
    try {
        const newCat = await Cat.create(req.body);
        res.status(201).send(newCat)
    } catch {
        res.status(500).send({error: "Cannot create new cat"})
    }
}

//connects to update function
async function update (req, res) {
    const index = parseInt(req.params.id)
    try {
        const cat = await Cat.showByIndex(index);
        const updatedCat = await cat.update(req.body)
        res.status(200).send(updatedCat)
    } catch(err) {
        res.status(500).send({error: "Cannot update cat"})
    }
}

//connects to delete function
async function del (req, res) {
    const index = parseInt(req.params.id)
    try {
        const deletedCat = await Cat.del(index)
        const deadCat = JSON.stringify(deletedCat)
        res.status(200).send(`Your cat ${deadCat} has been deleted`)
    } catch(err) {
        res.status(500).send({error: "Cat is indestructible"})
    }
}

module.exports = {index, random, specific, create, update, del};
