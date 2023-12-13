import "./articels.css";
import axios from 'axios';
import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Backdrop, Button, Modal } from "@mui/material";






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
  console.log(params);
  const [products, setProdcuts] = useState([]);

  const [detailProduct, setDetailProduct] = useState();


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
        
        
              <p key={product.id}>  {product.title} <hr /> {product.price}$ <hr />
              <div  className="op-btns">
                <button className="option-btn-blue">Add To Cart</button><button className="option-btn-red" >Add to Favorites</button>
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
