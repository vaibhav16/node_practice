const express = require('express');

const app = express();


app.get('',(req,res)=>{
    res.send('<h1>Weather</h1>')
})

app.get('/help',(req,res)=>{
    res.send([{
        name:'Bond',
        age:44

    },
    {
        name:'Deadpool',
        age:99

    }
])
})

app.get('/about',(req,res)=>{
    res.send("<h1>About Page!</h1>")
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'Its going to be sunny.',
        location:'London'
    });
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
});
