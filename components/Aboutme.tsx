import React from 'react'
import Image from "next/image"
import abt from "../assets/abt.svg"
const Aboutme = () => {
	const tags ={
	 'start': "<About>",
	'ending': "</About/>"
	}
	return (
<div className="pt-24 ">
 <div className="p-6 flex-col text-cream font-semibold ">
   <h1 className="text-5xl md:text-6xl pb-1 text-cream font-sora">ABOUT<span className="text-prime">.</span></h1>	  
 <div className="flex justify-center font-semibold w-56 md:w-64 h-2 bg-prime"></div>	
 </div>
<div className="grid md:grid-cols-2 grid-rows-1">
<div className="flex flex-col items-center">
<Image src={abt} alt="Picture of the author" />
</div>

<div className="flex flex-col  text-3xl text-cream p-6 md:pl-1">
<div className="text-2xl text-gry font-brd pb-1">{tags.start}</div>
<h1 className="text-6xl font-bold font-sans">Hi, I'am</h1>
<h1 className="text-7xl font-bold  font-sora pb-2 text-prime">Apoorv</h1>
<h1 className="text-2xl font-semibold  text-cream">a 15 year old full stack developer based in India. I cherish in building new stuff,I greatly enjoy Nextjs and TypeScript</h1>
<div className="text-2xl text-gry font-brd pt-1">{tags.ending}</div>
</div>





</div>
</div>
	)
}

export default Aboutme
