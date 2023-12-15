import React, { useEffect, useState } from 'react'
import "./ShoppingCart.css"
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart'))), []
  });

  useEffect(() => {
    setFav(JSON.parse(localStorage.getItem('fav'))), []
  });

  return (
    <div> 

      <h2 className='sc-header' >Shopping Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <div className='shoppingCart-box'>
          <>  <img className='sc-pix' src={product.pic} alt="" />
          <p key={index}>{product.name}</p>
          <p key={index}>{product.price} {product.value} </p>
          <button className='remove-btn'>Delete Item</button></>
          </div>
        
        ))}
      </ul>
      <h2 className='sc-header' >Wish List</h2>
      <ul>
        {fav.map((product, index) => (
          <div className='shoppingCart-box'>
          <>  <img className='wl-pix' src={product.pic} alt="?" />
          <p key={index}> {product.event} {product.name} {product.type} {product.location}</p>
          <p key={index}>{product.price}{product.value}</p>
          <button className='remove-btn' >Delete Item</button></>
          </div>
        ))}
      </ul>


    </div>
  ); 
};




export default ShoppingCart
