import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";
export const Home = () => {
  const savedRefreshToken = localStorage.getItem("refreshToken");
  const [navigate, setNavigate] = useState(false);
  const [username, setUsername] = useState("");



  //we wanna call the authenticated user from the backend
  useEffect(() => {
    (async () => {
      try{
        const { data } = await axios.get("profile/");
        setUsername(data.username);
        console.log(data.username);
      }catch(e){
        setNavigate(true)
        console.log("true in useffect")
      }
      
    })();
  }, []);

    //logout : make sure to put it in Authcontext
    const logout = async () => {
      await axios.post(
        "logout/blacklist/",
        { refresh: savedRefreshToken },
        { withCredentials: true }
      );
      setNavigate(true);
      console.log("true in logout")
  
    };
  
  if (navigate){
    return <Navigate to='/login' />
  }

  return (
    <div>
      <header className="p-3 bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/data" className="nav-link px-2 text-white">
                  Data
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link px-2 text-white">
                  Contact
                </Link>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-warning">
                Register
              </Link>
            </div>
            <div>
              <a
                href="javascript:void(0)"
                onClick={logout}
                className="btn btn-lg me-2 btn-primary"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </header>
      <h3 className=" mt-5 text-align">Hi {username}</h3>
    </div>
  );
};
