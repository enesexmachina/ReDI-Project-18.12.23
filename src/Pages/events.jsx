import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './events.css'



function events() {
  const params = useParams();
  console.log(params);
  const [events, setEvents] = useState([]);
  


  useEffect(() => {
    axios
      .get('https://www.jambase.com/jb-api/v1/events?apikey=3d76ad44-b59b-45c1-b564-945d2b3eacf8')
      .then((res) => {
        setEvents(res.data.events)});
  }, []);

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
  return (
    <div className='main-return' >
        <div className='categ-opt'>
            <p>Type</p>
            <p>Event</p>
            <p>Location</p>
            <p>Date</p>
            <p></p>
            
        </div>
        {events.map((event, index) => (
            <div className='event-box'key={index} >
              {/* <img height="200px" src={product.images[0]} ></img> */}
              <p className='event-script' key={event.index}>{event["@type"]}</p>
              <p className='event-script' key={event.index}>{event.name}</p>
              <p className='event-script' key={event.index}>{event.location.name}/{event.location.address.addressCountry.name}</p>
              <p className='event-script' key={event.index}>{new Date(event.startDate).toLocaleDateString('de-DE')}</p>
              <button onClick={() =>addToFav({ event: event.name,type: event["@type"], location: event.location.name, pic: event.image })} className='event-btn-red' >Add To Favorite</button>
            </div>
        ))}
      
    </div>
    )

  }

export default events
