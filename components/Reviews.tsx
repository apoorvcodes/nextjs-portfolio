import {FC} from 'react'
import array from "../assets/Testimonial.json"

const Reviews:FC = () => {
	return (
		<div className="pt-12 text-white">
		{array.testimonials.map((value, index,) => {
                   return <li className="text-white" key={index}>{value.review}</li>
		})}
		</div>
	)
}

export default Reviews
