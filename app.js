const http = require("http");
let PORT = 3000;
const URL = 'http://localhost'

let args = process.argv
let port = args.filter(a => a.startsWith('port='))
if (port.length) {
  PORT = port[0].split('=')[1]
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
  }else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>I am about page</h1>');
  }else{
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
})
console.log(`Server is running at ${URL}:${PORT}`)
server.listen(PORT)