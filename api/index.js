const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Kitchen API Running");
  res.end();
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});