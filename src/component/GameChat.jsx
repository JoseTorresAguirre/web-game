import React, { useState, useEffect } from "react";

const GameChat = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [socket, setSocket] = useState(null);

  // Conectar al servidor WebSocket al cargar el componente
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); // Reemplaza con tu URL si es diferente

    ws.onopen = () => {
      console.log("Conexión WebSocket establecida.");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "users") {
        setUsers(data.users); // Actualizar lista de usuarios
      } else if (data.type === "chat") {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: data.user, message: data.message },
        ]);
      }
    };

    ws.onclose = () => {
      console.log("Conexión WebSocket cerrada.");
    };

    setSocket(ws);

    return () => {
      ws.close(); // Cerrar la conexión al desmontar el componente
    };
  }, []);

  const handleInputChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const sendMessage = () => {
    if (currentMessage.trim() !== "" && socket) {
      // Enviar el mensaje al servidor WebSocket
      socket.send(JSON.stringify({ type: "chat", text: currentMessage }));
      setCurrentMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="mb-4">
        <strong className="block text-lg text-blue-600">
          🔵 {users.length} usuarios online
        </strong>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          {users.map((user, index) => (
            <li key={index} className="text-sm">
              {user}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="mb-4 h-48 overflow-y-auto bg-white border border-gray-300 rounded-md p-2">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-gray-200 rounded mb-2">
              <strong>{msg.user}: </strong>
              {msg.message}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={currentMessage}
            onChange={handleInputChange}
            placeholder="Escribe un mensaje..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameChat;
