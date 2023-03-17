require('dotenv').config()
const app = require('./app');
const port = process.env.PORT

app.listen(port, () => {
    console.log(`API is listening on port ${port}.`);
}); 
