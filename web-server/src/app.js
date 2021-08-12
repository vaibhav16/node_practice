const express = require('express');
const path = require('path');
const app = express();

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname,'../public/index.html'));

const indexPath = path.join(__dirname,'../public');

app.use(express.static(indexPath));

// app.get('',(req,res)=>{
//     res.send('<h1>Weather!!</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'Bond',
//         age:44
//     },
//     {
//         name:'Deadpool',
//         age:99
//     }
// ])
// })

// app.get('/about',(req,res)=>{
//     res.send("<h1>About Page!</h1>")
// })

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
