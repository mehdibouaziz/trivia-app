import { useEffect, useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { db } from '../../firebase.config'
import { updateDoc } from "firebase/firestore"
import { FaEye, FaEyeSlash, FaUser, FaLock, FaEnvelope, FaPencilAlt } from 'react-icons/fa'
import avatarDefault from '../../assets/avatars/000-unknown.png'


const Profile = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const [editMode, setEditMode] = useState(false)
    const [formData, setFormData] = useState({
        name: auth.currentUser?.displayName,
        email: auth.currentUser?.email,
    })
    const {name, email} = formData
    
    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

  return (
    <div className='pick-level-container flex flex-col justify-start items-center gap-6'>
        <div className='flex flex-col justify-start items-start w-10/12 gap-2'>
            <h1 className='text-blue-500 text-3xl font-semibold'>My profile:</h1>
        </div>

        <div className='flex flex-col justify-start items-center w-10/12 gap-2'>
            <div className="avatarDiv relative">
                <img src={avatarDefault} alt="avatar" className="w-32" />
                <button className="btn btn-warning btn-circle btn-sm absolute right-0 bottom-0" disabled title='Change Avatar' aria-label="Change Avatar"><FaPencilAlt /></button>
            </div>
            
            <div className='nameInputDiv w-full relative'>
                <div className='absolute top-4 left-3'>
                    <FaUser />
                </div>
                <input
                type="text"
                className='emailInput input w-full pl-10 font-semibold'
                placeholder='Nickname'
                id='name'
                value={name}
                disabled={!editMode}
                />
            </div>
            <div className='emailInputDiv w-full relative'>
                <div className='absolute top-4 left-3'>
                    <FaEnvelope />
                </div>
                <input
                type="email"
                className='emailInput input w-full pl-10 font-semibold'
                placeholder='Email'
                id='email'
                value={email}
                disabled={!editMode}
                />
            </div>
            <button className="btn bg-blue-400 hover:bg-blue-500 border-none w-full">{editMode ? 'Update' : 'Edit info'}</button>
        </div>
        <div className='flex flex-col justify-start items-start w-10/12 gap-2'>
            <button onClick={onLogout} className="btn btn-error w-full">Logout</button>
        </div>
    </div>
  )
}

export default Profile