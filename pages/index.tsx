import type { NextPage } from 'next'
import Aboutme from '../components/Aboutme'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar/Navbar'
import Skills from '../components/Skills'
const Home: NextPage = () => {
  return (

    <div className="min-h-screen min-w-screen bg-mainbg">
    <Navbar/>
    <Hero />
    <Aboutme/>
    <Skills/>
    </div>
  )
}

export default Home
