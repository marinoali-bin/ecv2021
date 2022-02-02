import React, { useEffect, useState, useRef } from "react"
import "./style.scss"

export const CustomCursor = () => {
	const cursorRef1 = useRef(null)
	const cursorRef2 = useRef(null)

	//const [etatCurs0, setEtatCurso] = useState(etatCurs)

	useEffect(() => {
		document.addEventListener("mousemove", (event) => {
			const { clientX, clientY } = event

			const mouseX = clientX - cursorRef1.current.clientWidth / 2
			const mouseY = clientY - cursorRef1.current.clientHeight / 2
			const mouseX2 = clientX - cursorRef2.current.clientWidth / 2
			const mouseY2 = clientY - cursorRef2.current.clientHeight / 2

			cursorRef1.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
			cursorRef2.current.style.transform = `translate3d(${mouseX2}px, ${mouseY2}px, 0)`
		})
	}, [document])

	return (
		<div className="custom__cursor">
			<div ref={cursorRef1} className="custom__cursor__inner"></div>
			<div ref={cursorRef2} className="custom__cursor__outer"></div>
		</div>
	)
}

export default CustomCursor
