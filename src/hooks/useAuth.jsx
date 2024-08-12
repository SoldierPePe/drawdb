import { Toast } from "@douyinfe/semi-ui"
import { createContext, useContext, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "./useLocalStorage"
import { api } from "../axios/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null)
  const [jwt, setJwt] = useLocalStorage("accessToken", null)
  const navigate = useNavigate()

  // call this function when you want to authenticate the user
  const login = async (data) => {
    api.auth.localCreate({
      identifier: data.identifier,
      password: data.password,
    }).then(res => {
      const userData = res

      setJwt(userData.jwt)
      setUser(userData.user)
      Toast.success(`Welcome back ${userData.user?.username}!`)
      navigate("/editor")
    }).catch(e => {
      e?.error?.message ? Toast.error(e?.error?.message) : console.log(e)
    })
   
  }

  // call this function to sign out logged in user
  const logout = () => {
    localStorage.clear()
    window.name = ""
    navigate("/login")
  }

  const value = useMemo(
    () => ({
      user,
      jwt,
      login,
      logout,
    }),
    [user,jwt],
  )

  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};