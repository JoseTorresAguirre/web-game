import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Share2, Repeat, Send } from 'lucide-react';

const Foro = () => {
  const [comentarios, setComentarios] = useState([
    { id: 1, usuario: 'Usuario1', texto: 'Gran post, muy interesante!', tiempo: '2h' },
    { id: 2, usuario: 'Usuario2', texto: 'Estoy de acuerdo con el punto principal.', tiempo: '1h' },
    { id: 3, usuario: 'Usuario3', texto: '¿Alguien puede explicar más sobre esto?', tiempo: '45m' },
    { id: 4, usuario: 'Usuario4', texto: 'Me gustaría ver más contenido como este.', tiempo: '30m' }
  ]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  const handleNuevoComentario = (e) => {
    e.preventDefault();
    if (nuevoComentario.trim() !== '') {
      setComentarios([
        ...comentarios,
        {
          id: comentarios.length + 1,
          usuario: 'Tú',
          texto: nuevoComentario,
          tiempo: 'Ahora'
        }
      ]);
      setNuevoComentario('');
    }
  };

  return (
    <div className='mt-[20vh]'>
      <div className="max-w-2xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <img 
          src="/placeholder.svg?height=400&width=600" 
          alt="Imagen aleatoria" 
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Título del post aleatorio</h2>
          <p className="text-gray-700 mb-4">
            Este es un texto de relleno para simular el contenido de un post en el foro. 
            Aquí podrías incluir una descripción más detallada o el cuerpo del mensaje.
          </p>
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-3">Publicado por: Usuario123</span>
            <span>Hace 2 horas</span>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <ThumbsUp className="w-5 h-5 mr-1" />
              <span>24 Me gusta</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <MessageSquare className="w-5 h-5 mr-1" />
              <span>{comentarios.length} Comentarios</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <Repeat className="w-5 h-5 mr-1" />
              <span>Retuitear</span>
            </button>
          </div>
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <Share2 className="w-5 h-5 mr-1" />
            <span>Compartir</span>
          </button>
        </div>
        <div className="px-6 py-4">
          <h3 className="font-bold text-lg mb-2">Comentarios</h3>
          {comentarios.map((comentario) => (
            <div key={comentario.id} className="mb-2 p-2 bg-gray-50 rounded">
              <p className="font-semibold">{comentario.usuario} <span className="text-gray-500 text-sm">• {comentario.tiempo}</span></p>
              <p>{comentario.texto}</p>
            </div>
          ))}
          <form onSubmit={handleNuevoComentario} className="mt-4 flex">
            <input
              type="text"
              value={nuevoComentario}
              onChange={(e) => setNuevoComentario(e.target.value)}
              placeholder="Escribe un comentario..."
              className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Foro;