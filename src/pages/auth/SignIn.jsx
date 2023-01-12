import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify';
import { FaArrowAltCircleRight, FaEye, FaEyeSlash, FaUser, FaLock } from 'react-icons/fa'

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const {email,password} = formData
    const navigate = useNavigate()

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    }
    const onSubmit = async (e) => {
      e.preventDefault()
      
      try {
        const auth = getAuth()
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        if(userCredentials.user){
          toast.success(`Success! Welcome back! 👋`)
          navigate('/')
        }
      } catch (error) {
        toast.error('Error: user not found 😰')
      }
    }

  return (
    <div className='pick-level-container flex flex-col justify-start items-center gap-6'>
        <div className='flex flex-col justify-start items-start w-10/12 gap-2'>
            <h1 className='text-blue-500 text-3xl font-semibold'>Welcome back!</h1>
            <h2 className='text-gray-500 text-lg font-medium'>Please log in:</h2>
        </div>

        <form 
          onSubmit={onSubmit}
          className='flex flex-col justify-start items-center w-10/12 gap-6 mt-6'>
          <div className='emailInputDiv w-full relative'>
            <div className='absolute top-4 left-3'>
              <FaUser />
            </div>
            <input
              type="email"
              className='emailInput input w-full pl-10 text-sm'
              placeholder='Email'
              id='email'
              value={email}
              onChange={onChange}
              />
          </div>
          <div className='passwordInputDiv w-full relative flex flex-col'>
            <div className='absolute top-4 left-3'>
              <FaLock />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              className='passwordInput input w-full pl-10 text-sm'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
              />
            <div className='btn btn-sm btn-circle btn-ghost absolute top-2 right-2 transition-none' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            <Link to='/forgot-password' className='font-semibold text-blue-500 cursor-pointer self-end mt-3 text-sm'>Forgot Password</Link>
          </div>
          <input
              type="submit"
              className='submitButton btn bg-blue-400 hover:bg-blue-500 border-none w-full '
              id='submit'
              value="Log In"
              />
        </form>

        <Link to='/sign-up' className='btn btn-ghost text-blue-500 w-10/12'>Sign Up Instead</Link>
        
    </div>
  )
}

export default SignIn