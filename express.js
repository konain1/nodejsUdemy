
const express = require('express')
const bodyparser = require('body-parser')


const app = express();
const adminRoute = require('./Router/admin')
const shopRoute = require('./Router/shop.js')





app.use(bodyparser.urlencoded({extended:false}))    

app.use('/admin',adminRoute)

app.use(shopRoute)

app.use((req,res,next)=>{
    res.status(404).send(`<h1>page not found</h1>`)
})



app.listen(3003)