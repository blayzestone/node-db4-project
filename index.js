require("dotenv").config();
const server = require("./server");

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`\nAPI running on port: ${PORT}\n`));
