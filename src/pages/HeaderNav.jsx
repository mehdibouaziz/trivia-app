import React from 'react'
import {FaUserAstronaut, FaTrophy, FaChevronLeft} from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const HeaderNav = () => {
    let location = useLocation()
    let navigate = useNavigate()

    if(location.pathname === '/quiz'){ return <></>}
    
  return (
    <div className='navbar mb-4 pt-8 px-6 box-border'>
        <div className='flex-1'>
            {location.pathname !== '/' &&
            <button className="btn btn-ghost btn-circle text-blue-500 text-3xl" onClick={() => navigate(-1)} >
                <FaChevronLeft />
            </button>
            }
        </div>
        <div className='flex-1 justify-end gap-3'>
            <Link className="btn btn-ghost btn-circle text-blue-500 text-3xl">
                <FaTrophy />
            </Link>
            <Link className="btn btn-ghost btn-circle text-blue-500 text-3xl">
                <FaUserAstronaut />
            </Link>
        </div>
        
    </div>
  )
}

export default HeaderNav