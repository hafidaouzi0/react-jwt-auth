import React from 'react'
import { Link } from 'react-router-dom'
export const Data = () => {
  return (
    <div>
      
      <header className="p-3 bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
          <li><a href="/data" className="nav-link px-2 text-white">Data</a></li>
          <li><a href="/contact" className="nav-link px-2 text-white">Contact</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
        <Link to='/login' className="btn btn-outline-light me-2">Login</Link>
          <Link to='/register' className="btn btn-warning">Register</Link>
        </div>
      </div>
    </div>
  </header>
      
      
      
      
      
      
      
  <h3 className=' mt-5 text-align'>Data</h3></div>
  )
}
