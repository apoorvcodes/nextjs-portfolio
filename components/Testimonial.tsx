import {FC} from 'react'
import Reviews from './Reviews'
const Testimonial:FC = () => {
	return (
		<div className="pt-24 ">
		<div className="p-6 flex-col text-cream font-semibold pb-8">
		  <h1 className="text-5xl md:text-6xl pb-1 text-cream font-sora">REVIEWS<span className="text-prime">.</span></h1>	  
		  <div className="flex justify-center font-semibold w-64 md:w-80 h-2 bg-prime"></div>	
	 
		   </div>
		   <Reviews/>
		</div>
	)
}

export default Testimonial
