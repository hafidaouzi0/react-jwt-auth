


import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


axios.defaults.baseURL="http://127.0.0.1:8000/";
let isRefreshing = false;

axios.interceptors.response.use(resp=>resp,async error =>{


    


 // console.log(error.response.status)
    if (error.response.status === 401 && !isRefreshing){
        isRefreshing = true;

        const savedRefreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("api/token/refresh/",
        {refresh:savedRefreshToken},{withCredentials:true})
        // localStorage.setItem("refreshToken", response.data["refresh"]);


    if (response.status === 200){
        axios.defaults.headers.common['Authorization']=`Bearer ${response.data['access']}`
       localStorage.setItem("refreshToken", response.data["refresh"]);
        isRefreshing = false;

return axios(error.config)
    }
    }
return Promise.reject(error);;
})


























// import axios from "axios";
// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";


// axios.defaults.baseURL="http://127.0.0.1:8000/";



// const refreshAccessToken = async (refreshToken) => {
//     const response = await axios.post(
//       "api/token/refresh/",
//       { refresh: refreshToken },
//       { withCredentials: true }
//     );
//     if (response.status === 200) {
//       axios.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${response.data["access"]}`;
//       //localStorage.setItem("refresh", response.data["refresh"]);
//     }
//   };









// axios.interceptors.response.use(resp=>resp,async error =>{

//     const { refreshToken } = useContext(AuthContext);

//     if (error.response.status === 401) {
//         await refreshAccessToken(refreshToken);
//         return axios(error.config);
//       }


//  // console.log(error.response.status)
//    // if (error.response.status === 401){
//         //let {refreshToken}=useContext(AuthContext)


        
// //         const response = await axios.post("api/token/refresh/",
// //         {"refresh":refreshToken},{withCredentials:true})
// //         console.log(refreshToken)
   

// //     if (response.status === 200){
// //         axios.defaults.headers.common['Authorization']=`Bearer ${response.data['access']}`
// //         //localStorage.setItem("refresh", response.data["refresh"]);

// // return axios(error.config)
// //     }
//    // }
// return error;
// })