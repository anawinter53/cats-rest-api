//require('dotenv').config()
const app = require('./app');
//const port = process.env.PORT

app.listen(5002, () => {
    console.log(`API is listening on port 5002.`);
}); 
