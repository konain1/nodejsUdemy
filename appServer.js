
const http = require('http')
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
        fs.writeFileSync('message.txt','dummy');
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


const server = http.createServer(rqListener)

server.listen(3002,()=>{
    console.log("server running on port 3002")
})