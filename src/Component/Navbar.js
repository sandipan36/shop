import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Up from './Up.css'


export default function Navbar() {
  const [search,setsearch]=useState({
    searched: " "
  })
  
  const handelChange =(event)=>{
  setsearch(event.target.value)
 }
 const formSubmit =(event) =>{
    event.preventDefault();
    console.log(`${search}`)
   
   
 }

  return (
    <div className='Nav'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link  className='Link' to="/home"> Home</Link>
        </li>
        <li className="nav-item">
         <Link className='Link' to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SpecialCourses
          </a>
          <ul className="dropdown-menu">
            <li><Link className='Link' to="/course"> Coruse</Link></li>
            <li><a className="dropdown-item" href="#">Leatest Course</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Up comiing Courses</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className='Link' to="/login">Login</Link>
        </li>
      </ul>
     
      <form className="d-flex" role="search" onSubmit={formSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={search.searched} onChange={handelChange}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>
</nav>

    </div>
  )
}
