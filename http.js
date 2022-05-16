const http = require('http');

const server = http.createServer((req, res) => {
console.log(req.url)
res.end('<h3>Hello NodeJs</h3>')
})

server.listen(6000, ()=> {
    console.log('server is Running')
})