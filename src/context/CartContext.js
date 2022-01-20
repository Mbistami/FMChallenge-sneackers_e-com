import React, { useState, createContext } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [value, setValue] = useState([])

  if (
    localStorage.getItem('_auth_data') &&
    typeof value.token === 'undefined'
  ) {
    setValue(JSON.parse(localStorage.getItem('_auth_data')))
  }

  return (
    <CartContext.Provider value={[value, setValue]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider