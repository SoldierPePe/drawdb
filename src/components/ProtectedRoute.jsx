import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const ProtectedRoute = ({ children }) => {
  const { user, jwt } = useAuth()
  if (!user && !jwt) {
    return <Navigate to="/login" />
  }
  
  return children
}