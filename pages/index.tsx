import type { NextPage } from 'next'
import Aboutme from '../components/Aboutme'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (

    <div className="container min-h-screen min-w-screen bg-space">
    <Hero />
    <Aboutme/>
    </div>
  )
}

export default Home
