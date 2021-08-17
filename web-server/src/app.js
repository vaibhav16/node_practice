const express = require('express');
const path = require('path');
const app = express();

//Defined paths for express configuration
const indexPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates')

//Setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewsPath);

//Setup static directory to serve
app.use(express.static(indexPath));

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Vaabs'
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Vaabs'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        msg:'If you need help, call 911.'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'Its going to be sunny.',
        location:'London'
    });
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
});
