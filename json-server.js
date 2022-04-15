const http = require("http");

const server = http.createServer((request, response) => {
  const data = {
    nama: "Sabrina Berbinar",
    age: 22,
  };
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
});

server.listen(8000);
