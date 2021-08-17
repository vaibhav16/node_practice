const express = require('express');
const path = require('path');
const app = express();

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname,'../public/index.html'));

const indexPath = path.join(__dirname,'../public');

app.set('view engine','hbs');
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

//app.com
//app.com/help
//app.com/about

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
});
