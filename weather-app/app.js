const geocode = require('./utils/geocode'); 
const forecast = require('./utils/forecast');


const address = process.argv[2];

if(address){
    geocode(address,(error,data)=>{

        if(error){
            return console.log("error: ",error)
        }
    
    
        forecast({latitude,longitude}=data,(error,forecastData)=>{
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

