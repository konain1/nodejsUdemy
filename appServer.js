
const http = require('http')

function rqListener(req,res){

    console.log(res)

    res.setHeader('Content-Type','html')
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>hello world </h1></body>');
    res.write('</html>');
    res.end()
}


const server = http.createServer(rqListener)

server.listen(3002)