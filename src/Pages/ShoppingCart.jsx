import React, { useEffect, useState } from 'react';
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem('fav'));
    if (storedFav) {
      setFav(storedFav);
    }
  }, []);

  function deleteItem(key, index) {
    if (key === 'cart') {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else if (key === 'fav') {
      const updatedFav = [...fav];
      updatedFav.splice(index, 1);
      setFav(updatedFav);
      localStorage.setItem('fav', JSON.stringify(updatedFav));
    }
  }

  return (
    <div>
      <h2 className='sc-header'>Shopping Cart</h2>
      {cart.length === 0 && <p className='empty-error'>Your shopping cart is empty.</p>}
      {cart.length > 0 && (
        <ul>
          {cart.map((product, index) => (
            <div className='shoppingCart-box' key={index}>
              <img className='sc-pix' src={product.pic} alt="" />
              <p>{product.name}</p>
              <p>{product.price} {product.value} </p>
              <button onClick={() => deleteItem('cart', index)} className='remove-btn'>Delete Item</button>
            </div>
          ))}
        </ul>
      )}
      <h2 className='sc-header'>Wish List</h2>
      {fav.length === 0 && <p className='empty-error' >Your wish list is empty.</p>}
      {fav.length > 0 && (
        <ul>
          {fav.map((product, index) => (
            <div className='shoppingCart-box' key={index}>
              <img className='wl-pix' src={product.pic} alt="?" />
              <p>{product.event} {product.name} {product.type} {product.location}</p>
              <p>{product.price}{product.value}</p>
              <button onClick={() => deleteItem('fav', index)} className='remove-btn'>Delete Item</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
