import React from "react"
import dataSection from "../../dataSection"
import "./style.scss"
//import data from "../Portfolio/data.portfolio"

//import gsap, { ScrollTrigger } from "gsap"

const ScrollTest = () => {
	return (
		<div className="data-section">
			{dataSection.map((data) => {
				return (
					<div key={data.id} className="block">
						<div className="block-img">
							<img src={data.imgUrl} alt={data.title} />
						</div>

						<div className="block-content">
							<h1 className="block-title">{data.title}</h1>
							<p>{data.description}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default ScrollTest
