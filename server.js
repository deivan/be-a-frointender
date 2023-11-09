// const http = require("http");

// const host = '127.0.0.1';
// const port = 8000;

// const serverListener = (req, res) => {
//   console.log('got request', req);
//   res.writeHead(200);
//   res.end('Your response');
// }

// const server = http.createServer(serverListener);

// server.listen(port, host, () => {
//   console.log('server started at port ' + port)
// });

const express = require('express')
const app = express()
const port = 8000
const router = require('./router')

const JSONexample = { a:1, bb:222, cc: [1,1,2,2,3], d: { a: 'AAAA' }};

app.use(express.static('public'))
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})