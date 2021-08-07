const request = require('postman-request');

const forecast = (lat, long,callback) => {
    const url = "http://api.weatherstack.com/current?access_key=a87d7844bdfe1cc96e40e1d40e6c096e&query="+long+','+lat;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect. Error Occured!",undefined)
        } else if (response.body.error) {
            callback("Unable to find location!",undefined)
        } else {
            const data = response.body.current;
            const str = data.weather_descriptions[0] + ". It is currently " + data.temperature + " degrees out. It feels like " + data.feelslike + " degrees out."
            callback(undefined,str);
        }
    })
}

module.exports = forecast;

//APIKEY=a87d7844bdfe1cc96e40e1d40e6c096e