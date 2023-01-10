import React from 'react'
import MenuButton from '../components/MenuButton'

const Home = () => {
  return (
    <div>
        <div>
            <h2>Hi, user!</h2>
            <h1>What shall we play?</h1>
        </div>

        <MenuButton color="salmon" logo="cup" title="Ranked Quiz" />
    </div>
  )
}

export default Home