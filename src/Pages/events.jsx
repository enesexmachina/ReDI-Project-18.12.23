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
  return (
    <div className='main-return' >
      
      <div className='event-categ' >
      
        <div className='categ-opt'>
            <p>Type</p>
            <p>Event</p>
            <p>Location</p>
            <p>Date</p>
            <p></p>
            <p></p>
            
        </div>
        {events.map((event) => (
            <div className='event-box' >
              {/* <img height="200px" src={product.images[0]} ></img> */}
              <p className='event-script' key={event.index}>{event["@type"]}</p>
              <p className='event-script' key={event.index}>{event.name}</p>
              <p className='event-script' key={event.index}>{event.location.name}/{event.location.address.addressCountry.name}</p>
              <p className='event-script' key={event.index}>{new Date(event.startDate).toLocaleDateString('de-DE')}</p>
              <button className='event-btn-blue'>Add To Cart</button><button className='event-btn-red' >Add To Favorite</button>
            </div>
        ))}
      </div>
    </div>
    )

  }

export default events
