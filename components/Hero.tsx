import Blogging from "../assets/Blogging.svg"
import React from 'react'
import Image from "next/image"

const Hero = () => {
	const tags = {
	start: {
	body : "<body>",
	hero: "<hero>",
	html: "<html>",
	
	},
	closing: {
	body : "</body>",
	hero: "</hero>",
	html: "</html>",
	}
	}
	return (
		<div className="mx-auto container ">
	        <div className="text-2xl text-gry font-brd">{tags.start.html}</div>
		<div className="text-2xl text-gry font-brd pl-2">{tags.start.body}</div>
		<div className="grid  grid-rows-reversed-1 md:grid-cols-2 ">
		<div className="flex flex-col justify-center pl-4 pb-4 md:pb-0">
		<div className=" text-2xl font-brd text-gry pl-2">{tags.start.hero}</div>
		<div className="text-4xl md:text-7xl  font-bold text-cream font-sans">Hi,</div>
		<div className="text-4xl md:text-7xl sm:text-5xl font-bold text-cream font-sora">I'm <span className="text-prime">Apoorv</span></div>
		<div className="text-4xl md:text-7xl  sm:text-5xl font-bold text-cream font-sora">a web developer</div>
		<div className="text-3xl  font-bold text-gry font-sans">Fronted developer / Backend developer</div>
		<div className="text-2xl font-brd text-gry pl-2">{tags.closing.hero}</div>
		
		</div>
		<div><Image src={Blogging}  className="w-2/3"/></div>
		</div>
		<div className="text-2xl text-gry font-brd pl-2">{tags.closing.body}</div>
		<div className="text-2xl text-gry font-brd">{tags.start.html}</div>
		</div>
	)
}

export default Hero
