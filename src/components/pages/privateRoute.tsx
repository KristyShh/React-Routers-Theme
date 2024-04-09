import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { AuthContext } from "../authContent"
export const PrivateRoute = () => {
    const {auth} = useContext(AuthContext)
    const location = useLocation()
    
    return auth ? (
    <Outlet /> 
        
    ): (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}