import React from 'react'
import Image from "next/image"
import abt from "../assets/abt.svg"
const Aboutme = () => {
	return (
		<div className="pt-24 ">
 <div className="p-6 flex-col text-white font-semibold ">
   <h1 className="text-5xl md:text-6xl pb-1">ABOUT.</h1>	  
 <div className="flex justify-center bg-purple-500 font-semibold w-56 md:w-64 h-2 "></div>	
 </div>
<div className="grid md:grid-cols-2 grid-rows-1">
<div className="flex flex-col items-center">
<Image src={abt} alt="Picture of the author" />
</div>

<div className="flex flex-col  text-3xl text-white p-6 md:pl-1">
<h1 className="text-5xl font-semibold font-pops">Hi, I'am</h1>
<h1 className="text-7xl font- font-curs pt-2 pb-4 text-bloodred">Apoorv</h1>
<h1 className="text-4xl font-semibold pt-3 f">a developer based in India. I love building new stuff, I greatly enjoy Nuxtjs and TypeScript</h1>
</div>





</div>
</div>
	)
}

export default Aboutme
