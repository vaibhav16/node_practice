const geocode = require('./utils/geocode'); 
const forecast = require('./utils/forecast');


const locationEntered = process.argv[2];

if(locationEntered){
    geocode(locationEntered,(error,data)=>{

        if(error){
            return console.log("error: ",error)
        }
    
    
        forecast(data.latitude,data.longitude,(error,forecastData)=>{
            if(error){
                return console.log("error: ",error)
            }
        
            console.log(data.location);
            console.log(forecastData);
        });
    })
    
    
}

else{
    console.log("No location entered!")
}

