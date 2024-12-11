import React, { useState } from 'react'
import { ShoppingCart, Plus, Minus } from 'lucide-react'

const productos = [
  { id: 1, nombre: "Empire Builder - Juego Base", precio: 59.99, imagen: "/placeholder.svg?height=200&width=200" },
  { id: 2, nombre: "Expansión 'Nuevos Horizontes'", precio: 29.99, imagen: "/placeholder.svg?height=200&width=200" },
  { id: 3, nombre: "Set de Fichas Deluxe", precio: 19.99, imagen: "/placeholder.svg?height=200&width=200" },
  { id: 4, nombre: "Tablero de Edición Limitada", precio: 39.99, imagen: "/placeholder.svg?height=200&width=200" },
  { id: 5, nombre: "Libro de Estrategias", precio: 14.99, imagen: "/placeholder.svg?height=200&width=200" },
  { id: 6, nombre: "Pack de Cartas Extra", precio: 9.99, imagen: "/placeholder.svg?height=200&width=200" },
]

const Tienda = () => {
  const [carrito, setCarrito] = useState({})
  const [carritoAbierto, setCarritoAbierto] = useState(false)

  const agregarAlCarrito = (id) => {
    setCarrito(prevCarrito => ({
      ...prevCarrito,
      [id]: (prevCarrito[id] || 0) + 1
    }))
  }

  const quitarDelCarrito = (id) => {
    setCarrito(prevCarrito => {
      const nuevaCantidad = (prevCarrito[id] || 0) - 1
      const nuevoCarrito = { ...prevCarrito }
      if (nuevaCantidad <= 0) {
        delete nuevoCarrito[id]
      } else {
        nuevoCarrito[id] = nuevaCantidad
      }
      return nuevoCarrito
    })
  }

  const totalCarrito = Object.entries(carrito).reduce((total, [id, cantidad]) => {
    const producto = productos.find(p => p.id === parseInt(id))
    return total + (producto.precio * cantidad)
  }, 0)

  const cantidadTotal = Object.values(carrito).reduce((total, cantidad) => total + cantidad, 0)

  return (
    <div className='mt-[20vh] max-w-6xl mx-auto p-6 relative'>
      <h1 className='text-3xl font-bold mb-8 text-center text-blue-600'>Tienda Empire Builder</h1>
      
      {/* Carrito flotante */}
      <div className='fixed top-24 right-4 z-10'>
        <button 
          onClick={() => setCarritoAbierto(!carritoAbierto)}
          className='bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300'
          aria-label='Abrir carrito'
        >
          <ShoppingCart size={24} />
          {cantidadTotal > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs'>
              {cantidadTotal}
            </span>
          )}
        </button>
        
        {carritoAbierto && (
          <div className='mt-2 bg-white p-4 rounded-lg shadow-md w-64'>
            <h2 className='text-lg font-bold mb-2'>Carrito de Compras</h2>
            {Object.entries(carrito).map(([id, cantidad]) => {
              const producto = productos.find(p => p.id === parseInt(id))
              return (
                <div key={id} className='flex justify-between items-center mb-2 text-sm'>
                  <span>{producto.nombre.substring(0, 20)}... x {cantidad}</span>
                  <span>${(producto.precio * cantidad).toFixed(2)}</span>
                </div>
              )
            })}
            <div className='mt-4 pt-2 border-t border-gray-200'>
              <div className='flex justify-between items-center font-bold'>
                <span>Total:</span>
                <span>${totalCarrito.toFixed(2)}</span>
              </div>
            </div>
            <button 
              className='mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300'
            >
              Proceder al Pago
            </button>
          </div>
        )}
      </div>

      {/* Lista de productos */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {productos.map(producto => (
          <div key={producto.id} className='bg-white p-4 rounded-lg shadow-md'>
            <img src={producto.imagen} alt={producto.nombre} className='w-full h-48 object-cover mb-4 rounded' />
            <h2 className='text-xl font-semibold mb-2'>{producto.nombre}</h2>
            <p className='text-gray-600 mb-4'>${producto.precio.toFixed(2)}</p>
            <div className='flex justify-between items-center'>
              <button 
                onClick={() => agregarAlCarrito(producto.id)}
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'
                aria-label={`Agregar ${producto.nombre} al carrito`}
              >
                <Plus size={20} />
              </button>
              <span className='text-lg font-semibold'>{carrito[producto.id] || 0}</span>
              <button 
                onClick={() => quitarDelCarrito(producto.id)}
                className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300'
                disabled={!carrito[producto.id]}
                aria-label={`Quitar ${producto.nombre} del carrito`}
              >
                <Minus size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tienda