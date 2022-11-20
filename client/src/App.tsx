import { BrowserRouter, Navigate , Routes, Outlet, Route  } from 'react-router-dom';

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Login from './pages/login';

import "./index.css"
import Navbar from './components/navbar';



const PrivateRoutes = () => {
  const isAuth = false;
  
  return <>{ isAuth ? <Outlet /> : < Navigate to='/login'/>}</>
}


const RestrictedRoute = () => {
  const isAuth = false;
  
  return <>{ !isAuth ? <Outlet /> : < Navigate to='/dashboard'/>}</>
}




const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route element={<PrivateRoutes />}>
         <Route path="/dashboard" element={<Dashboard />}/>
        </Route>

        
        <Route element={<RestrictedRoute />}>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Route>

       
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
