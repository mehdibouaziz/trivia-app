import { useNavigate } from 'react-router-dom'

import MenuButton from '../components/MenuButton'
import beginnerIcon from '../assets/svg/005-cat.png'
import intermediateIcon from '../assets/svg/011-tiger-3.png'
import expertIcon from '../assets/svg/013-lion-1.png'
import randomIcon from '../assets/svg/014-coolcat.png'
import { redGradient, greenGradient, orangeGradient } from '../assets/gradients/gradients'

const NewQuiz = () => {
    let navigate = useNavigate()

  return (
    <div className='pick-level-container flex flex-col justify-start items-center gap-12'>
        <div className='flex flex-col justify-start items-start w-10/12 gap-2'>
            <h1 className='text-blue-500 text-3xl font-semibold'>Ranked Quiz</h1>
            <h2 className='text-gray-500 text-lg font-medium'>Choose a difficulty:</h2>
        </div>

        <div className='flex flex-col justify-start items-center w-full gap-6 mb-24'>
          <MenuButton bgcolor={greenGradient} logo={beginnerIcon} title="Beginner" clickAction={() => navigate('/ranked/setup/beginner')} />
          <MenuButton bgcolor={orangeGradient} logo={intermediateIcon} title="Intermediate" clickAction={() => navigate('/ranked/setup/intermediate')} />
          <MenuButton bgcolor={redGradient} logo={expertIcon} title="Expert" clickAction={() => navigate('/ranked/setup/expert')} />
          <MenuButton  logo={randomIcon} title="Random" clickAction={() => navigate('/ranked/setup/random')} />
        </div>
    </div>
  )
}

export default NewQuiz