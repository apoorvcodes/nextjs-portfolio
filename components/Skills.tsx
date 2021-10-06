import {FC} from 'react'
import { FrontendCard } from './FrontendCard'
import BackendCard from "./BackendCard"
import ToolsCard from './ToolsCard'
const Skills:FC = () => {
	const tags ={
	'start': "<Skills>",
	'end': "</skills>"
	}
	return (
		<div className="pt-24 ">
       <div className="p-6 flex-col text-cream font-semibold pb-8">
         <h1 className="text-5xl md:text-6xl pb-1 text-cream font-sora">SKILLS<span className="text-prime">.</span></h1>	  
         <div className="flex justify-center font-semibold w-56 md:w-64 h-2 bg-prime"></div>	

          </div>
	  <div className="text-3xl text-gry font-brd pb-1 pl-3">{tags.start}</div>
	  <FrontendCard/>
	  <BackendCard/>
	  <ToolsCard/>
	  <div className="text-3xl text-gry font-brd pb-1 pl-3">{tags.end}</div>
	  </div>
	)
}

export default Skills
