
const express = require('express')
const path = require('path')

const route = express.Router();





route.get('/add-product',(req,res,next)=>{
//     res.send(` <form action='/admin/add-product' method='POST'>
//     <label for="textInput">Input:</label>
//     <input type="text" id="textInput" name="textInput"  required>
//     <br><br>
//     <input type="submit" value="Submit">
// </form>`)

res.sendFile(path.join(__dirname, '../','views' , 'add-product.html'))



})

route.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop')
})


module.exports = route