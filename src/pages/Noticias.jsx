import React from 'react'
import { Dice1Icon as Dice, DollarSign, Users, Clock } from 'lucide-react'

const Noticia = () => {
  return (
    <div className='mt-[20vh] max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg'>
      <h1 className='text-3xl font-bold mb-4 text-blue-600'>Nuevo Juego de Mesa Revoluciona el Mercado: "Challenge"</h1>
      
      <img 
        src="/placeholder.svg?height=400&width=600" 
        alt="Imagen del juego Empire Builder" 
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      
      <p className='text-gray-600 mb-4'>
        Publicado el {new Date().toLocaleDateString()} por Juan Pérez
      </p>
      
      <p className='text-lg mb-4'>
        El mundo de los juegos de mesa está experimentando una revolución con el lanzamiento de "Empire Builder", 
        un nuevo juego que promete desafiar el reinado de clásicos como Monopoly. Desarrollado por la empresa 
        emergente GameMasters Inc., este juego combina elementos de estrategia económica con una narrativa 
        envolvente sobre la construcción de imperios comerciales.
      </p>
      
      <h2 className='text-2xl font-semibold mb-3 text-blue-500'>Características Principales:</h2>
      
      <ul className='list-none mb-4'>
        <li className='flex items-center mb-2'>
          <Dice className='mr-2 text-blue-500' />
          <span>Mecánicas de juego innovadoras que combinan suerte y estrategia</span>
        </li>
        <li className='flex items-center mb-2'>
          <DollarSign className='mr-2 text-blue-500' />
          <span>Sistema económico complejo que simula mercados reales</span>
        </li>
        <li className='flex items-center mb-2'>
          <Users className='mr-2 text-blue-500' />
          <span>Modo multijugador para 2-6 jugadores</span>
        </li>
        <li className='flex items-center mb-2'>
          <Clock className='mr-2 text-blue-500' />
          <span>Partidas dinámicas de 60-90 minutos</span>
        </li>
      </ul>
      
      <p className='text-lg mb-4'>
        "Nuestro objetivo era crear un juego que ofreciera la emoción de construir un imperio comercial, 
        pero con mecánicas más profundas y opciones estratégicas más interesantes que los juegos tradicionales", 
        comentó Sarah Johnson, diseñadora jefe de Empire Builder.
      </p>
      
      <p className='text-lg mb-4'>
        Los primeros comentarios de los jugadores han sido extremadamente positivos, con muchos elogiando 
        la profundidad estratégica y la rejugabilidad del juego. Los expertos de la industria predicen que 
        Empire Builder podría convertirse rápidamente en un nuevo clásico en el género de juegos de mesa económicos.
      </p>
      
      <div className='bg-blue-100 p-4 rounded-lg'>
        <h3 className='text-xl font-semibold mb-2 text-blue-700'>Disponibilidad</h3>
        <p>
          Empire Builder estará disponible en tiendas especializadas y en línea a partir del próximo mes, 
          con un precio recomendado de 59.99€. Las preventas ya están abiertas en la página web oficial del juego.
        </p>
      </div>
    </div>
  )
}

export default Noticia