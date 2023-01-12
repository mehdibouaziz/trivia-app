import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../../firebase.config'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaUser, FaLock, FaAt } from 'react-icons/fa'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const {name, email,password} = formData
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
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredentials.user
        updateProfile(auth.currentUser, {
          displayName: name,
        })
        const formDataForFirebase = {
          name,
          email,
          timestamp: serverTimestamp(),
          avatar: null
        }
        await setDoc(doc(db, 'users', user.uid), formDataForFirebase)

        toast.success(`🌟 Success! Welcome ${name}! 🌟`)
        navigate('/profile')
      } catch (error) {
        toast.error('Error: something happened 😰')
      }
    }

  return (
    <div className='pick-level-container flex flex-col justify-start items-center gap-6'>
        <div className='flex flex-col justify-start items-start w-10/12 gap-2'>
            <h1 className='text-blue-500 text-3xl font-semibold'>Welcome!</h1>
            <h2 className='text-gray-500 text-lg font-medium'>Please create an account:</h2>
        </div>

        <form 
          onSubmit={onSubmit}
          className='flex flex-col justify-start items-center w-10/12 gap-6 mt-6'>
          <div className='nameInputDiv w-full relative'>
            <div className='absolute top-4 left-3'>
              <FaUser />
            </div>
            <input
              type="text"
              className='emailInput input w-full pl-10 text-sm'
              placeholder='Nickname'
              id='name'
              value={name}
              onChange={onChange}
              />
          </div>
          <div className='emailInputDiv w-full relative'>
            <div className='absolute top-4 left-3'>
              <FaAt />
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
          </div>
          <input
              type="submit"
              className='submitButton btn bg-blue-400 hover:bg-blue-500 border-none w-full '
              id='submit'
              value="Sign Up"
              />
        </form>

        <Link to='/sign-in' className='btn btn-ghost text-blue-500 w-10/12'>Log In</Link>
        
    </div>
  )
}

export default SignUp