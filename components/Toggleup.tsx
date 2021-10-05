import {FC, useState} from 'react'
import {BsFillArrowUpCircleFill} from "react-icons/bs";
import Scroll from "react-scroll"
var scr = Scroll.animateScroll;
const ToggleUp:FC = () => {
	const [Scroll, setScroll] = useState<Boolean>(false)
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300){
		  setScroll(true)
		} 
		else if (scrolled <= 300){
		  setScroll(false)
		}
	      };
	      if (typeof window !== "undefined") {
		// browser code
		window.addEventListener('scroll', toggleVisible)
	      }

	
	return (
		<div className="container relative">
		{Scroll ? <BsFillArrowUpCircleFill onClick={() => {
		scr.scrollToTop({});
		}} className="
		 text-5xl transition
		 duration-500 ease-in-out
		 transform text-prime fixed  bottom-10 
		 right-10 "/> : <div></div>  }
		
		</div>
	)
}

export default ToggleUp
