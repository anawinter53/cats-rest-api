require('dotenv').config()
const app = require('./app');
const port = process.env.PORT

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}.`);
}); 
