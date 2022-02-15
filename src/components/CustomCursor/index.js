import React, { useEffect, useRef } from "react"
//import useWindowSize from "../../hooks/useWindowSize"
import "./style.scss"
import gsap from "gsap"

export const CustomCursor = () => {
	const cercle1Ref = useRef(0)
	const cercle2Ref = useRef(0)

	const moveCercle = () => {
		document.addEventListener("mousemove", (e) => {
			const { clientX, clientY } = e

			//const { clientHeight, clientWidth } = cercle1Ref.current

			const c1 = document.querySelector(".cercle1")
			const c2 = document.querySelector(".cercle2")

			gsap.to(c2, {
				x: clientX - cercle2Ref.current.clientHeight / 2,
				y: clientY - cercle2Ref.current.clientWidth / 2
			})
			gsap.to(c1, {
				x: clientX - cercle1Ref.current.clientHeight / 2,
				y: clientY - cercle1Ref.current.clientWidth / 2,
				delay: 0.02
			})
		})
	}

	useEffect(() => {
		moveCercle()
	}, [document])

	return (
		<>
			<svg className="cercle1" ref={cercle1Ref}>
				<circle cx="50" cy="50" r="40" stroke="black" strokeWidth="1" />
			</svg>

			<svg className="cercle2" ref={cercle2Ref}>
				<circle
					cx="15"
					cy="15"
					r="5"
					//stroke="black"
					// strokeWidth="3"
				/>
			</svg>
		</>
	)
}

export default CustomCursor
