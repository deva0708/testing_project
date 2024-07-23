import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () =>{
    let auth ={'token':localStorage.getItem('token')}
    return (
        auth.token ==='valid' ? <Outlet/> : <Navigate to='./dashboard'/>
    )
}

export default ProtectedRoutes;
