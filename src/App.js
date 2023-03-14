import './App.css';
import {createBrowserRouter,createRoutesFromElements,Route,Link,Outlet,RouterProvider} from 'react-router-dom'
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Data } from './components/Data';
import { Login } from './components/Login';
import { Register } from './components/Register';
function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
<Route  index element={<Home/>}/>
<Route path='/data' element={<Data/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>

    </Route>
  )
)

  return (
    <div className="App">
    <RouterProvider router={router} />
   
    </div>
  );
}



const Root=()=>{

 return <>
 {/* <div><Link to='/'>Home</Link>{"  "}
 <Link to="/data">Data</Link>{"  "}
 <Link to='/login'>Login</Link>{"  "}
 <Link to='/register'>Register</Link>{"  "}

 </div> */}
 <div>
  <Outlet/>
  </div>
 </> 
}

export default App;

