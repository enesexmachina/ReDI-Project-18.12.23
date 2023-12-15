import "./App.css";
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import home from './Pages/home'
import conscious from './Pages/conscious'
import articels from './Pages/articels'
import events from "./Pages/events";
import profile from "./Pages/profile";
import ShoppingCart from "./Pages/ShoppingCart";

function App() {

  

  const [user, setUser] = useState({ name: "User1", isLoggedIn: false });

  function login() {
    const updatedUser = { ...user, isLoggedIn: true }
    setUser(JSON.parse(JSON.stringify(updatedUser)));
    localStorage.setItem("localUser", JSON.stringify({ isLoggedIn: true }))
  }

  useEffect(() => {
    const userlocal = localStorage.getItem("localUser")
    if (userlocal != null)
    
    setUser(JSON.parse(userlocal))
  }, [])


  function logout() {
    const updatedUser = { ...user, isLoggedIn: false }
    setUser(JSON.parse(JSON.stringify(updatedUser)));
    localStorage.setItem("localUser", JSON.stringify({ isLoggedIn: false }))
  }

  function handleButton() {
    if (user.isAuthenticated) {
      logout()
    } else {
      login()
    }
  }

  return (
    <div className="main-target" >
      {!user.isLoggedIn && <button onClick={login} >Login</button>}
        {user.isLoggedIn && <p>Wilkommen {user.name ? user.name : "zürück" } <button onClick={logout}>Logout</button> </p> }

      <div className="main-div" >

        <BrowserRouter>
          <div className="top-box" >
            <img className="lbl-pic" src="./public/img/nsx-magazino.jpg" alt="script_lbl" />
            <input className="search-bar" type="text" placeholder=" Search Bar " ></input>
          </div>
          <nav className="nav-bar">
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/Events">EVENTS</Link>
            <Link className="link" to="/Products">PRODUCTS</Link>
            <Link className="link" to="/Conscious">GALLERY</Link>
            <Link className="link" to="/MyProfile">MY PROFILE</Link>
            <Link className="link" to="/ShoppingCart">CART</Link>



          </nav>
          <Routes>
            <Route path="/MyProfile" Component={profile} />
            <Route path="/" Component={home} />
            <Route path="/Conscious" Component={conscious} />
            <Route path="/Products" Component={articels} />
            <Route path="/Events" Component={events} />
            <Route path="/ShoppingCart" Component={ShoppingCart}/>

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
