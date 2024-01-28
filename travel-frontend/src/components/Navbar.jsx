import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg">
    <div className="container">
        <Link to="/"id="logo" className="navbar-brand h1 fs-2">WanderLust</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar"><span className="bars"><i className="fa-solid fa-bars"></i></span></button>

<div className="collapse navbar-collapse" id="mynavbar">
    <ul className="navbar-nav me-auto">
        <li className="nav-item"><Link to="/"className="nav-link active" >Home</Link></li>
            <li className="nav-item"><Link to="/book"className="nav-link active">Book</Link></li>
        <li className="nav-item"><Link to="/packages"className="nav-link active">Packages</Link></li>
        <li className="nav-item"><Link to="/services"className="nav-link active">Services</Link></li>
        <li className="nav-item"><Link to="/testimonials"className="nav-link active">Testimonials</Link></li>
        <li className="nav-item"><Link to="/about"className="nav-link active">About</Link></li>

    </ul>
   
<form className="d-flex">
    <input className="form-control me-2" type="text" placeholder="Search"/>
    <button className="btn btn-success" type="button">Search</button>
</form>
</div>
</div> 
</nav>
    
    </>
  )
}

export default Navbar