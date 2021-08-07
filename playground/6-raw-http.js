const http = require('http');
const url = "http://api.weatherstack.com/current?access_key=a87d7844bdfe1cc96e40e1d40e6c096e&query="+40+','+75;

const request = http.request(url,(response)=>{

    let data = '';

    response.on('data',(chunk)=>{
        data = data + chunk.toString();
        console.log(chunk)
    })

    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})


request.on('error',(error)=>{
    console.log('An error: ',error)

})

request.end();