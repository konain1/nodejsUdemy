
const http = require('http')
const express = require('express')
const app = express();
const fs = require('fs')

function rqListener(req,res){

    const url = req.url
    const method = req.method
    if(url == '/'){
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message">  <button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method==='POST'){

        let body = []
        req.on('data',(chunk)=>{
            console.log(chunk.toString())
            body.push(chunk)
        })

        req.on('end',()=>{
            const parserbody = Buffer.concat(body).toString();
            const msg = parserbody.split('=')[1]
            fs.writeFileSync('message.txt',msg)
        })

        // fs.writeFileSync('message.txt','dummy');
        res.statusCode =302;
        res.setHeader('location','/')
        return res.end()

    }

    res.setHeader('Content-Type','html')
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>hello world </h1></body>');
    res.write('</html>');
    res.end()
}

app.use((req,res,next)=>{
    console.log('middleware')
    next();
})

app.use((req,res,next)=>{
    console.log('another middleware')
    res.send('<h1>hello from Express</h1>')
})


const server = http.createServer(app)

server.listen(3010,()=>{
    console.log("server running on port 3010")
})