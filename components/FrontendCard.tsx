import {FC} from 'react'
import Image from 'next/image'
import frontend from "../assets/frontend.svg"
import {DiReact} from "react-icons/di"
import {SiNextdotjs} from "react-icons/si"
import {FaVuejs} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
export const FrontendCard:FC = () => {
	const tags= {'start': '<Frontend>' , 'end' : "</frontend>"}
	return (
		<div className="container mx-auto pt-16">
		<div className="flex  flex-col items-center md:flex-row  md:space-x-24">
                 <Image src={frontend}/>
		 <div className="flex flex-col justify-center">
		 <div className="text-2xl text-gry font-brd pb-1">{tags.start}</div>
		 <div className="text-7xl text-cream font-sora"> Front<span className="text-prime">end</span></div>
                <div className="flex  text-6xl pt-2 space-x-6 ">
		<DiReact className="text-cream hover:text-prime"/>
		<SiNextdotjs className="text-cream hover:text-prime"/>
		<FaVuejs className="text-cream hover:text-prime"/>
		<SiTailwindcss className="text-cream hover:text-prime"/>
		</div>
		<div className="text-2xl text-gry font-brd pb-1">{tags.end}</div>
		 </div>
		
		</div>
		</div>
	)
}
