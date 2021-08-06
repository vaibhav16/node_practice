const request = require('postman-request');
//APIKEY=a87d7844bdfe1cc96e40e1d40e6c096e
const url = "http://api.weatherstack.com/current?access_key=a87d7844bdfe1cc96e40e1d40e6c096e&query=37.8267,-122.4233&units=f";

request({url:url,json:'json'}, (error, response, body) => {
    if(error){
        console.log("Unable to connect. Error Occured!")
    }
    else if(response.body.error){
        console.log("Unable to find location!")
    }
    else{
        const data = response.body.current;
        const str = data.weather_descriptions[0] + ". It is currently "+data.temperature+" degrees out. It feels like "+ data.feelslike +" degrees out."
        console.log(str);
    }


})

const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidnNzaGFybWEiLCJhIjoiY2tyejFwanh0MTVzcTJ2bjh3emJkem1hMCJ9.-kU_iYLZJaCyU2z3YuqKgA&limit=1";

//Error URL for testing
//const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/777ffjafjkas.json?access_token=pk.eyJ1IjoidnNzaGFybWEiLCJhIjoiY2tyejFwanh0MTVzcTJ2bjh3emJkem1hMCJ9.-kU_iYLZJaCyU2z3YuqKgA&limit=1";

request({url:geoCodeURL,json:true},(error,response,body)=>{
    console.log(response.body)
    if(error){
        console.log("Unable to connect. Error Occured!")
    }
    else if(!response.body.features || (response.body.features && response.body.features.length==0)){
        console.log("Unable to find location!")
    }
    else{
        const data = response && response.body && response.body.features[0];
        if(data){
            const coordinates = data.geometry.coordinates;
            const latitude = coordinates[1];
            const longitude = coordinates[0];
            console.log(latitude,longitude);
        }
    }


})