const Cat = requires('../models/Cat');

//function connects to show all, show by index functions
async function index (req, res) {
    res.send('Index works')
}

//connects to show random function
async function random (req, res) {
    res.send('Random works')
}

//connects to create function
async function create (req, res) {
    res.send('Post works')
}

//connects to update function
async function update (req, res) {
    res.send('Update works')
}

//connects to delete function
async function del (req, res) {
    res.send('Del works')
}

module.exports = {index, random, create, update, del};
