const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

const clients = new Map();

wss.on("connection", (socket) => {
  const userId = `Usuario${clients.size + 1}`;
  clients.set(socket, userId);

  // Notificar lista de usuarios
  broadcast({ type: "users", users: [...clients.values()] });

  socket.on("message", (message) => {
    const data = JSON.parse(message);
    if (data.type === "chat") {
      broadcast({ type: "chat", user: userId, message: data.text });
    }
  });

  socket.on("close", () => {
    clients.delete(socket);
    broadcast({ type: "users", users: [...clients.values()] });
  });
});

function broadcast(data) {
  for (const client of clients.keys()) {
    client.send(JSON.stringify(data));
  }
}

console.log("Servidor WebSocket corriendo en ws://localhost:8080");
