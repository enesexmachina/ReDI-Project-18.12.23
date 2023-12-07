import "./App.css";
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import home from './Pages/home'
import conscious from './Pages/conscious'
import articels from './Pages/articels'
import news from './Pages/news'
import data from './Pages/data'
import getmember from './Pages/getmember'

function App() {
  return (
    <div>
      <div className="search-box" >
        <input className="search-bar" type="text" placeholder=" What are U looking 4 ? " ></input>
      </div>
      <div className="label">
        <p className="label-script">NSX:Magazino</p>
      </div>


      <div>
        <BrowserRouter>
          <nav >
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/News">News</Link>
            <Link className="link" to="/Prod">Artikels</Link>
            <Link className="link" to="/Conscious">Conscious</Link>
            <Link className="link" to="/Data">Data+</Link>
            <Link className="link" to="/GetMember">Get Member</Link>

          </nav>
          <Routes>
            <Route path="/" Component={home} />
            <Route path="/Conscious" Component={conscious} />
            <Route path="/Prod" Component={articels} />
            <Route path="/News" Component={news} />
            <Route path="/Data" Component={data} />
            <Route path="/GetMember" Component={getmember} />
          </Routes>
        </BrowserRouter>
      </div>

    </div >
  )
}

export default App
