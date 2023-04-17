import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AxiosPublicInstance } from '../config/Axios'

// create context
export const AuthContext = createContext()

// storage data to components / local save
const loadedUser = JSON.parse(localStorage.getItem('user'))
const loadedToken = JSON.parse(localStorage.getItem('token'))
const username = JSON.parse(localStorage.getItem('user.username'))

// create context provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(loadedUser ? loadedUser : null)
  const [token, setToken] = useState(loadedToken ? loadedToken : null)
  const [getUser, setGetUser] = useState(username ? username : null)
  const navigate = useNavigate()

  // console.log(getUser)

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
  const login = async (data) => {
    try {
      const response = await AxiosPublicInstance.post('/auth/local', data)
      const { user, jwt } = response.data

      // console.log(response.data)
      // console.log(user.username)

      // update local storage
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('username', JSON.stringify(user.username))
      localStorage.setItem('token', JSON.stringify(jwt))

      // update state
      setUser(user)
      setToken(jwt)
      setGetUser(user.username)

      toast.success('Login successful !')
      navigate('/home')
    } catch (err) {
      toast.error('err.response?.data?.error?.message')
    }
  }

  // logout
  const logout = () => {
    // remove data from local storage
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    // remove data from state
    setUser(null)
    setToken(null)

    toast.success('Logout successful !')
  }

  const value = {
    user,
    token,
    registration,
    login,
    logout,
    getUser,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
