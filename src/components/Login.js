import React from 'react'
import axios, { Axios } from 'axios'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
export const Login = () => {
// const [username,setUsername]=useState("")
// const [password,setPassword]=useState("")
// const [navigate,setNavigate]=useState(false)

let {username,setUsername,setPassword,password,submitLogin}=useContext(AuthContext)
//const submit=submitLogin(e)
// async (e)=>{

//   e.preventDefault();
//   const {data}=await axios.post("api/token/",
//   {
// username:username,
// password:password
//   }, {withCredentials:true});
//   //console.log(data.access)
//  axios.defaults.headers.common['Authorization']=`Bearer ${data['access']}`
//   //console.log(response.data)
//   setNavigate(true)

//   if(navigate){
//     return <Navigate to='/' />
//   }

 

// }

return (
    <div>
<header className="p-3 bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
          <li><Link to="/data" className="nav-link px-2 text-white">Data</Link></li>
          <li><Link to="/contact" className="nav-link px-2 text-white">Contact</Link></li>
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

    <main className="form-signin w-100 m-auto">
          
    <form onSubmit={e=>submitLogin(e)} >
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
      
      <div className="form-floating">
        <input type="text" className="form-control"
         id="floatingInput" placeholder="Username" name='username' onChange={e=>{setUsername(e.target.value); console.log(username)}}/>
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control"
         id="floatingPassword" placeholder="Password" name='password' onChange={e=>{setPassword(e.target.value)}}/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
  
      
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  </main>
  </div>
  )
}
