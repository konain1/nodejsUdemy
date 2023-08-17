
const express = require('express')

const app = express();


app.use('/product',(req,res,next)=>{
    res.send(`<h1>this is product page</h1>`)
})

app.use('/',(req,res,next)=>{
    console.log('in the middle ware ')
    res.send(`<h1>'hello'</h1>`)
})


app.listen(9000)