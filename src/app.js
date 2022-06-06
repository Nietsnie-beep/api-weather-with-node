const express =  require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const hbs = require('hbs');
const router = require('./router');

//Parsear el body usando body parser
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario

app.set('views')
app.set('view engine', 'hbs')

app.use('/', router)

app.listen(3000, () => {
    console.log("The server is now runnig on Port 3000");
});