const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors({
  origin: "*",   // allow all origins (OK for demo)
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, "0.0.0.0", () => {
  console.log("JSON Server running on port", PORT);
});
