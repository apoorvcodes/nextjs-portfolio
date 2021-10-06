import {FC} from 'react'
import Reviews from './Reviews'
const Testimonial:FC = () => {
	const tags = {
	 start : "<Testimonial>",
	 end : "</testimonial>"
	}
	return (
		<div className="pt-24 pb-2">
		
		<div className="p-6 flex-col text-cream font-semibold pb-8">
		  <h1 className="text-5xl md:text-6xl pb-1 text-cream font-sora">REVIEWS<span className="text-prime">.</span></h1>	  
		  <div className="flex justify-center font-semibold w-64 md:w-80 h-2 bg-prime"></div>	
	 
		   </div>
		   <div className="text-3xl text-gry font-brd pl-3">{tags.start}</div>
		   <Reviews/>
		   <div className="text-3xl text-gry font-brd pl-3">{tags.end}</div>
		</div>
	)
}

export default Testimonial
