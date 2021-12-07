import type { NextPage } from 'next'
import Aboutme from '../components/Aboutme'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Skills from '../components/Skills';
import Testimonial from '../components/Testimonial';
import Toggleup from '../components/Toggleup';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home: NextPage = () => {
  return (

    <div className="min-h-screen min-w-screen bg-mainbg">
       <Toggleup/>
       <Nav/>
    
       <Hero />
      <Aboutme/>
      <Skills/>
      <Projects/>
       <Testimonial/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Home
