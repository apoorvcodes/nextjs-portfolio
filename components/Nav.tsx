import {useState} from 'react'
import Hamburger from 'hamburger-react'
import { motion } from "framer-motion"

const Nav = () => {
	const [Open, setOpen] = useState<boolean>(false)
	const toggle = () => {setOpen(!Open)}
	return (
		<div className='container mx-auto'>
		 <div className="flex justify-between pt-4 md:pt-8 pl-8 pr-8 pb-10 md:pb-2">
		<div className="text-4xl md:text-5xl text-cream font-semibold">Portfo<span className='text-prime font-bold'>lio</span></div>
		<div className="text-cream " onClick={()=> toggle()}><Hamburger size={34} color="#FD0F49"/></div>
		</div>
		{Open ? 
		<motion.nav 
		animate={Open ? "open" : "closed"}
		
		className=' min-w-screen pt-10 pb-4 flex flex-col justify-center items-center space-y-16'>
		<motion.div className='text-prime 
		text-5xl font-bold opacity-0' 
		animate={{ y: 5, opacity: 1 }} transition={{ duration: 1 }}>Home</motion.div>
		<motion.div className='text-prime 
		text-5xl font-bold opacity-0' 
		animate={{ y: 5, opacity: 1 }} transition={{ duration: 1 }}>Skills</motion.div>
		<motion.div className='text-prime 
		text-5xl font-bold opacity-0' 
		animate={{ y: 5, opacity: 1 }} transition={{ duration: 1 }}>Projects</motion.div>
		<motion.div className='text-prime 
		text-5xl font-bold opacity-0' 
		animate={{ y: 5, opacity: 1 }} transition={{ duration: 1 }}>Testimonial</motion.div>
		<motion.div className='text-cream 
		text-5xl font-bold opacity-0' 
		animate={{ y: 5, opacity: 1 }} transition={{ duration: 1 }}>Contact</motion.div>
			
		</motion.nav> : <></> }
		</div>
	)
}

export default Nav
