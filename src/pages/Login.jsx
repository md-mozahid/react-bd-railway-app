import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import Logo from '../assets/img/bangladesh-railway.png'
import { AuthContext } from '../contextApi/AuthContext'

// import LogoBg from '../assets/img/login-page-bg.svg'

const schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
})

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    isSubmitting,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { login } = useContext(AuthContext)

  const onSubmit = (data) => {
    login({
      identifier: data.email,
      password: data.password,
    })
    reset()
  }

  return (
    <div className="bg-zinc-300 h-screen">
      <div className="flex flex-col justify-center items-center ">
        <img src={Logo} alt="" />
        <h1 className="text-3xl font-semibold pt-5 pb-3">Bangladesh Railway</h1>
        <small className="pb-5">Safe * Comfortable * Save</small>
        <div className="bg-zinc-100 w-72 rounded-md p-4 shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between pb-4">
              <a href="">Forgot password</a>
              <a href="">Need help</a>
            </div>
            <div>
              <input
                className="inputText bg-gray-200"
                type="email"
                name="email"
                {...register('email')}
                placeholder="Enter your mobile number"
                defaultValue="muzahid@gmail.com"
              />
              {errors.username?.message}
              <input
                className="inputText bg-gray-200"
                type="password"
                name="password"
                {...register('password')}
                placeholder="Enter your password"
                defaultValue='Aa123@'
              />
              {errors.password?.message}
              <button type="submit" className="btn-primary btn-fw">
                LOGIN
              </button>
              <p className="text-center text-gray-400 pt-3">OR</p>
              <p className="text-center text-green-700 underline ">
                <Link to="/register">REGISTER</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
