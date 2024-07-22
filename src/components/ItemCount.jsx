import React from 'react'

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

    
  return (

    <div> 
    <div className='itemCount'>
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
    </div>
    <button className='AgregarAlCarrito' onClick={handleAgregar}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount