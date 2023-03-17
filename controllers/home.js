const Cat = require('../models/Cat')

async function index (req, res) {
    try {
        const cats = await Cat.showAll()
        res.send(`Welcome to my cats API, we have ${cats.length} cats here!`)
    } catch {
        res.status(500).send({ error: "Server error"})
    }
}

module.exports = index;
