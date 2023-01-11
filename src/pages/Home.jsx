import React from 'react'
import MenuButton from '../components/MenuButton'

import trophyIcon from '../assets/svg/001-trophy.png'
import practiceIcon from '../assets/svg/002-strength.png'
import { salmonGradient, blueGradient } from '../assets/gradients/gradients'

const Home = () => {
  return (
    <div className='home-container flex flex-col justify-start items-center gap-12'>
        <div className='flex flex-col justify-start items-start w-10/12 gap-2'>
            <h2 className='text-blue-500 text-lg font-medium'>Hi, user!</h2>
            <h1 className='text-gray-500 text-3xl font-semibold'>What shall we play?</h1>
        </div>

        <div className='flex flex-col justify-start items-center w-full gap-6'>
          <MenuButton navref="/ranked/setup" bgcolor={salmonGradient} logo={trophyIcon} title="Ranked Quiz" />
          <MenuButton bgcolor={blueGradient} logo={practiceIcon} title="Practice" />
        </div>
    </div>
  )
}

export default Home