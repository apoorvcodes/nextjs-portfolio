import type { NextPage } from 'next'
import Aboutme from '../components/Aboutme'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar/Navbar'
import Skills from '../components/Skills';
import Testimonial from '../components/Testimonial';
import Toggleup from '../components/Toggleup';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (

    <div className="min-h-screen min-w-screen bg-mainbg">
       <Toggleup/>
       <Navbar/>
    
       <Hero />
      <Aboutme/>
      <Skills/>
       <Testimonial/>
       <Contact/>
    </div>
  )
}

export default Home
