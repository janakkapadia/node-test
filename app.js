const http = require("http");
const fs = require("fs");

let PORT = 3000;
const URL = 'http://localhost';

let args = process.argv;
let port = args.filter(a => a.startsWith('port='));
if (port.length) {
  PORT = port[0].split('=')[1];
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile("Pages/home.html",'utf-8',(err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    })
  }else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile("Pages/about.html",'utf-8',(err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    })
  }else{
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.readFile("Pages/404.html",'utf-8',(err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    })
  }
})
console.log(`Server is running at ${URL}:${PORT}`)
server.listen(PORT)