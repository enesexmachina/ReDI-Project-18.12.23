import "./articels.css";
import axios from 'axios';
import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import InfoIcon from '@mui/icons-material/Info';





function articels() {
  const params = useParams();
  console.log(params);
  const [products, setProdcuts] = useState([]);

  useEffect(() => {
    axios
      .get('./src/products.json')
      .then((res) => {//debugger;
        setProdcuts(res.data.products)});
  }, []);
  return (
    <div className='main-cat' >
      

      <div className='prod-categ' >
        {products.map((product) => (
          <div>
            <div className='prod-box' >
              <img height="200px" src={product.images[0]} ></img>
              <p key={product.id}>  {product.title} <hr /> {product.price}$ <hr />
                <button><AddShoppingCartIcon /></button><button><FavoriteBorderIcon /></button><button><InfoIcon /></button><button><IosShareIcon /></button></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}

export default articels
