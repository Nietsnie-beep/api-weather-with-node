const axios = require('axios');
const { response } = require('express');
const API_KEY = 'a234aff307f1d59deec9cd1cae51d681'

exports.renderHomePage = (req,res) => {
    res.render("index");
}

exports.getWeather = (req, res) => {
    // console.log(req.body);
    // res.send(`your typed ${req.body.city}`)
    const city = req.body.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    axios.get(url).then((response) => {
        // console.log(response.data.main.temp, response.data.name);
        res.render('index',{
            weather:`It is currently ${response.data.main.temp} in ${response.data.name}`
        })
    }).catch((error) => {
        console.log(error);
    })
}

exports.renderAboutPage = (req, res) => {
    res.render("about")
}