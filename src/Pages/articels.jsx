import "./articels.css";
import axios from 'axios';
import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Button, Modal } from "@mui/material";







function articels() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (product) => {
    setDetailProduct(product)
    setOpen(true);
  };
  const params = useParams();
  
  const [products, setProdcuts] = useState([]);

  const [detailProduct, setDetailProduct] = useState();

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Retrieve existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    const newCart = [...existingCart, product];

    // Update the state and localStorage with the new cart
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const [fav, setFav] = useState([]);

  const addToFav = (product) => {
    // Retrieve existing cart from localStorage
    const existingFav = JSON.parse(localStorage.getItem('fav')) || [];

    // Add the new product to the cart
    const newFav = [...existingFav, product];

    // Update the state and localStorage with the new cart
    setFav(newFav);
    localStorage.setItem('fav', JSON.stringify(newFav));
  };


  useEffect(() => {
    axios
      .get('./src/products.json')
      .then((res) => {
        setProdcuts(res.data.products)});
  }, []);
  
  return (
    <div className='main-cat' >
      <div className='prod-categ' >
        {products.map((product) => (
            <div className='prod-box' key={product.id} >
              <img className="prod-pic" height="20px" src={product.images[0]} ></img>
              <Button onClick={()=>handleOpen(product)}>View</Button>
        
        
              <p key={product.id}>  {product.title} <hr /> {product.price} {product.value} <hr />
              <div  className="op-btns">
                <button onClick={() => addToCart({ name: product.title, price:product.price, value:product.value, pic:product.images[0] })} className="option-btn-blue">Add To Cart</button>
                <button onClick={() => addToFav({name: product.title, price:product.price,value:product.value, pic:product.images[0] })} className="option-btn-red" >Add to Favorites</button>
                </div>
                </p>
            </div>
        ))}
      </div>

      <Modal
  open={open}
  onClose={handleClose}
  style={{display:"flex",justifyContent:"center"}}
>
  <img src={detailProduct?.images[0]} />
  
</Modal>
    </div>
  )

}

export default articels
