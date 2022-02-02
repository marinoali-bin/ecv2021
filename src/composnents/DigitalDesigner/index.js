import React, { createRef, useEffect, useRef, useState } from "react"
import "./style.scss"
import gsap from "gsap"
import CustomCursor from "../CustomCursor"

const DigitalDesigner = () => {
	const digitalTitle = useRef(null)
	//const [color, setColor] = useState("blue")

	const handleMouseEnter = () => {
		//cursorAnimEnter(digitalTitle.current)
	}

	const handleMouseLeave = () => {
		//cursorAnimOut(digitalTitle)
		digitalTitle.current.style.backgroundColor = ""
	}

	return (
		<div className="digital__designer">
			<h1
				ref={digitalTitle}
				// onMouseEnter={handleMouseEnter}
				// onMouseLeave={handleMouseLeave}
				className="box1 cursorAnim"
			>
				digital <span className="color__prime">designer</span>
			</h1>
		</div>
	)
}

export default DigitalDesigner
