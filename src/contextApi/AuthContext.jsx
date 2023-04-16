import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import { AxiosPublicInstance } from '../config/Axios'
import { useNavigate } from 'react-router-dom'

// create context
export const AuthContext = createContext()

// create context provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  // register
  const registration = async (data) => {
    try {
      const response = await AxiosPublicInstance.post(
        '/auth/local/register',
        data
      )
      const { user, jwt } = response.data
      //   console.log(response.data)

      // update local storage
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', JSON.stringify(jwt))

      // update state
      setUser(user)
      setToken(jwt)
      toast.success('Registration successful !')
      navigate('/home')
    } catch (err) {
      toast.error(err.response?.data?.error?.message)
      // console.log(err.response)
    }
  }

  // login
  const login = (data) => {}

  // logout
  const logout = (data) => {}

  const value = {
    user,
    token,
    registration,
    login,
    logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
