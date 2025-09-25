const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middlewares
server.use(middlewares);

// Routes
server.use(router);

// Port
const PORT = process.env.PORT || 5000;

// Start Server
server.listen(PORT, (err) => {
  if (err) {
    console.error("Server failed to start:", err);
    process.exit(1);
  }
  console.log(`JSON Server is running on port ${PORT}`);
});
