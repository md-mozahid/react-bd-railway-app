import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Logo from '../assets/img/verify-nid-illustration.svg'
import { AuthContext } from '../contextApi/AuthContext'
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
  // mobileNumber: yup
  //   .string()
  //   .min(11, 'too short')
  //   .required('mobile number required')
  //   .matches(/^(\+88|0088)?(01){1}[3456789]{1}(\d){8}$/, 'too long'),
  username: yup
    .string()
    .min(3, 'Min 3 character')
    .required('User name is required'),
  email: yup.string().email().lowercase().required('Email is required'),
  password: yup
    .string()
    .min(6, 'min 6 character')
    .max(12, 'max 12 character')
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Min 6 Characters, Uppercase, Lowercase, Number and Special Character'
    ),
})

const Register = () => {
  // const [selectedDate, setSelectedDate] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    isSubmitting,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { registration } = useContext(AuthContext)

  const onSubmit = (data) => {
    registration({
      username: data.username,
      email: data.email,
      password: data.password,
    })
  }

  return (
    <div className="bg-zinc-200 pb-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl py-5">Registration</h1>
        <hr className="py-0.5 bg-green-700" />
        <div className="flex flex-col justify-center items-center pt-10">
          <hr />
          <div className="flex flex-col justify-center items-center w-96 mx-auto">
            <img src={Logo} alt="" />
            <h1 className="text-3xl font-semibold pt-5 pb-3">
              Please Verify Your NID
            </h1>
            {/* <p className="pb-5">
              Enter the information below to verify and register your NID with
              Bangladesh Railway Ticketing Service If your NID is verified
              through SMS, please use the details used during the SMS
              verification.
            </p> */}
          </div>
          <div className="bg-zinc-100 w-96 rounded-md p-4 text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="inputText bg-gray-200"
                type="username"
                name="username"
                placeholder="Enter your username"
                {...register('username')}
                defaultValue="muzahid"
              />
              {errors.username?.message}
              <input
                className="inputText bg-gray-200"
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register('email')}
                defaultValue="muzahid@gmail.com"
              />
              {errors.email?.message}
              <input
                className="inputText bg-gray-200"
                type="password"
                name="password"
                placeholder="Enter your NID / password"
                {...register('password')}
                defaultValue="Aa123@"
              />
              {errors.password?.message}
              {/* <ReactDatePicker
                  className="inputText"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/mm/yyyy"
                  isClearable
                  showYearDropdown
                  scrollableYearDropdown
                  placeholder="Pic a date"
                /> */}
              <button type="submit" className="btn-primary btn-fw">
                Register
              </button>
              <p className="pt-5">
                If you are under 18 years old or a foreign passport holder, you
                can register with your birth certificate or passport by clicking
                the submit data button.
              </p>
              <button
                type="submit"
                className="btn-primary-outline btn-fw text-green-600">
                Submit Data
              </button>

              <p className="pt-6">
                <Link to="/login" className="text-green-700 hover:underline">
                   Already Registered?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
