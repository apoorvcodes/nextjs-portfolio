import React from 'react'
import Image from "next/image"
import backend from "../assets/backend.svg"
import {GrNode} from "react-icons/gr"
import {SiExpress, SiMongodb, SiTypescript} from "react-icons/si"

const BackendCard = () => {
	const tags= {'start': '<Backend>' , 'end' : "</backend>"}
	return (
		<div className="container mx-auto pt-12">
		<div className="flex justify-end space-x-24">
                <div className="flex flex-col justify-center">
		<div className="text-2xl text-gry font-brd pb-1">{tags.start}</div>
		 <div className="text-7xl text-cream font-sora"> Back<span className="text-prime">end</span></div>
                <div className="flex  text-6xl pt-2 space-x-6 ">
		<GrNode className="text-cream hover:text-prime"/>
		<SiExpress className="text-cream hover:text-prime"/>
		<SiTypescript className="text-cream hover:text-prime"/>
		<SiMongodb  className="text-cream hover:text-prime"/>
		</div>
		<div className="text-2xl text-gry font-brd pb-1">{tags.end}</div>
		 </div>
		<Image src={backend}/>
		</div>
		</div>
	)
}

export default BackendCard
