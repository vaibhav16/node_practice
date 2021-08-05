const request = require('postman-request');
//APIKEY=a87d7844bdfe1cc96e40e1d40e6c096e
const url = "http://api.weatherstack.com/current?access_key=a87d7844bdfe1cc96e40e1d40e6c096e&query=37.8267,-122.4233&units=f";

request({url:url,json:'json'}, (error, response, body) => {
    //console.log(response);
    const data = response.body.current;
    const str = data.weather_descriptions[0] + ". It is currently "+data.temperature+" degrees out. It feels like "+ data.feelslike +" degrees out."
    console.log(str);
})