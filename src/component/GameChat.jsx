import React, { useState, useEffect } from "react";

const GameChat = () => {
  const [users, setUsers] = useState(["Usuario1", "Usuario2", "Usuario3"]);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prevUsers) => {
        if (prevUsers.length < 5) {
          return [...prevUsers, `Usuario${prevUsers.length + 1}`];
        }
        return prevUsers; // No agregues más usuarios si ya hay 5
      });
    }, 5000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  const handleInputChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, currentMessage]);
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
              {msg}
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
