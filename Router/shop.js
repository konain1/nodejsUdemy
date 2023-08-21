

const express = require('express')

const router = express.Router();





router.use('/shop',(req,res,next)=>{
    console.log('in the middle ware ')
    res.send(`<h1>shop</h1>`)
})


module.exports = router