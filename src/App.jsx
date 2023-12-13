import "./App.css";
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import home from './Pages/home'
import conscious from './Pages/conscious'
import articels from './Pages/articels'
import events from "./Pages/events";
import profile from "./Pages/profile";


function App() {
  return (
    <div className="main-target" >
       <div className="main-div" >

        <BrowserRouter>
        <div className="top-box" >
          <img className="lbl-pic" src="./public/img/nsx-magazino.jpg" alt="script_lbl" />
          <input className="search-bar" type="text" placeholder=" Search Bar " ></input>
        </div>
          <nav className="nav-bar">
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/Products">PRODUCTS</Link>
            <Link className="link" to="/Conscious">GALLERY</Link>
            <Link className="link" to="/Events">EVENTS</Link>
            <Link className="link" to="/MyProfile">MY PROFILE</Link>



          </nav>
          <Routes>
            <Route path="/MyProfile" Component={profile}/>
            <Route path="/" Component={home} />
            <Route path="/Conscious" Component={conscious} />
            <Route path="/Products" Component={articels} />
            <Route path="/Events" Component={events} />

          </Routes>
        </BrowserRouter>
        </div>
      </div>
  )
}

export default App
