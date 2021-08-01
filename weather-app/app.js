const request = require('postman-request');
//APIKEY=a87d7844bdfe1cc96e40e1d40e6c096e
const url = "http://api.weatherstack.com/current?access_key=a87d7844bdfe1cc96e40e1d40e6c096e&query=37.8267,-122.4233";

request(url, (error, response, body) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
})