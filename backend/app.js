const express = require('express');
const app = express();
app.use('/static',express.static('public'));
app.get('/',(req,res)=>{
    res.send('hello 王琦1')
    console.log(req)
    // res.send(JSON.stringify(req))
});

app.get('/wq',(req,res)=>{
    res.send('hello')
    console.log(req)
    // res.send(JSON.stringify(req))
});

app.listen(8080,(req,res)=>{
    // console.log('1port: 8080')
    console.log(req)
})


