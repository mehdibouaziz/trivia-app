import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import beginnerIcon from '../assets/svg/005-cat.png'
import intermediateIcon from '../assets/svg/011-tiger-3.png'
import expertIcon from '../assets/svg/013-lion-1.png'
import randomIcon from '../assets/svg/014-coolcat.png'
import Spinner from "../components/Spinner"
import { blueGradient } from "../assets/gradients/gradients"

const StartQuiz = () => {
    const [isLoading, setIsLoading] = useState(false)
    let params = useParams()
    let navigate = useNavigate()
    const {difficultyLevel: level} = params
    let logo = ''
    switch(level){
        case 'beginner':
            logo = beginnerIcon;
            break;
        case 'intermediate':
            logo = intermediateIcon;
            break;
        case 'expert':
            logo = expertIcon;
            break;
        case 'random':
            logo = randomIcon;
            break;
        default:
            break;
    }

    const startQuiz = (e) => {
        e.preventDefault()
        setIsLoading(true)

        navigate('/quiz')
    }

    if(isLoading){return <Spinner />}
  return (
    <div className='start-quiz-container flex flex-col justify-start items-center gap-12'>
        <div className='flex flex-col justify-start items-center w-10/12 gap-2'>
            <h1 className='text-blue-500 text-3xl font-semibold'>Ready?</h1>
        </div>

        <div className='flex flex-col justify-start items-center w-full gap-3'>
            <img src={logo} alt={'level-' + level} className="w-32" />
            <h2 className='text-gray-500 text-3xl font-semibold capitalize'>{level}</h2>
            <p className='text-blue-500 text-3xl font-semibold capitalize'>Ranked Quiz</p>
            <p className='text-gray-500 text-lg font-semibold capitalize'>20 questions</p>
        </div>

        <button onClick={startQuiz} className={blueGradient + ' btn border-none text-[1.8rem] normal-case w-10/12 btn-lg rounded-2xl shadow-md'}>Let's go!</button>
    </div>
  )
}

export default StartQuiz