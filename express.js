
const express = require('express')
const bodyparser = require('body-parser')


const app = express();




app.use(bodyparser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
    res.send(` <form action='/product' method='POST'>
    <label for="textInput">Input:</label>
    <input type="text" id="textInput" name="textInput"  required>
    <br><br>
    <input type="submit" value="Submit">
</form>`)
})

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    console.log('in the middle ware ')
    res.send(`<h1>'hello'</h1>`)
})


app.listen(3003)