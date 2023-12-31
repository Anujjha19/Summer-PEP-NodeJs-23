const app = require("./app");
const http = require("http");
require("dotenv").config();

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
