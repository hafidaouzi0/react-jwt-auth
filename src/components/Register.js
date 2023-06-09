import React from 'react'

export const Register = () => {
  return (
    <main className="form-signin w-100 m-auto">
    <form>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingInput" placeholder="Username"/>
        <label >Username</label>
      </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
  
      
      <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </main>
  )
}
