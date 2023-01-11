import { useState } from "react"
import { Link } from "react-router-dom"

import Spinner from "../components/Spinner"

import { blueGradient } from "../assets/gradients/gradients"
import { FaTimes, FaTrophy } from 'react-icons/fa'

const Quiz = () => {
    const [isLoading, setIsLoading] = useState(false)

    if(isLoading){return (
        <div className={'Quiz w-screen h-screen ' + blueGradient}>
            <Spinner color='white' />
        </div>) }

  return (
    <div className={'Quiz w-screen h-screen ' + blueGradient}>
            <div className='navbar mb-4 pt-8 box-border px-6'>
                <div className='navbar-start'>
                    <Link className="btn btn-ghost btn-circle text-white text-3xl" to='/' >
                        <FaTimes />
                    </Link>
                </div>
                <div className='navbar-end'>
                    <Link className="btn btn-ghost btn-circle text-white text-3xl" >
                        <FaTrophy />
                    </Link>
                </div>
            </div>    
    </div>
  )
}

export default Quiz