import { createContext, useState, useEffect } from "react";
import { Home } from "../components/Home";
import { Navigate } from "react-router-dom";
import axios, { Axios } from "axios";


const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const [refreshToken, setRefreshToken] = useState( localStorage.getItem("refreshToken") || "");

  const submitLogin = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "api/token/",
      {
        username: username,
        password: password,
      },
      { withCredentials: true }
    );
    // console.log(data.refresh)
    setRefreshToken(data["refresh"]);
    localStorage.setItem("refreshToken", data["refresh"]);

    // console.log(refreshToken)
    axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
    //console.log(response.data)

    setNavigate(true);

    if (navigate) {
      return <Navigate to="/" />;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        submitLogin,
        refreshToken,
        setRefreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
