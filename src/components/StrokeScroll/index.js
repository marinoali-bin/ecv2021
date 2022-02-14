import "./style.scss"
import React, { useEffect, useRef } from "react"
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const StrokeScroll = () => {
	const arrow = useRef()
	const arrowBox = useRef()
	useEffect(() => {
		console.log(arrowBox.current)

		gsap.fromTo(
			arrow.current,
			{
				y: "-100"
			},
			{
				y: "100",
				duration: 3,
				repeat: -1,
				delay: 2,
				ease: Power3.easeOut
			}
		)
		gsap.to(arrow.current, {
			scrollTrigger: {
				trigger: arrowBox.current,
				//markers: true,
				scrub: true,
				start: " top 90%",
				end: () => "+=" + arrow.current.clientHeight * 9,
				toggleActions: "play none  reverse none"
			},
			opacity: 0
		})
	}, [])

	return (
		<div refs={arrowBox} className="arrows">
			<div ref={arrow} className="arrow arrow__1">
				<svg
					width="64"
					height="81"
					viewBox="0 0 64 81"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_203_2)">
						<path
							d="M64 48.988L54.4242 39.4087L38.7879 55.0509L38.7879 -1.10206e-06L25.2121 -1.69547e-06L25.2121 55.0509L9.57576 39.4087L3.17034e-06 48.988L32 81L64 48.988Z"
							fill="#111111"
						/>
					</g>
					<defs>
						<clipPath id="clip0_203_2">
							<rect
								width="81"
								height="64"
								fill="white"
								transform="translate(64) rotate(90)"
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
			{/* <div ref={arrow} className="arrow arrow__2">
				<svg
					width="64"
					height="81"
					viewBox="0 0 64 81"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_203_2)">
						<path
							d="M64 48.988L54.4242 39.4087L38.7879 55.0509L38.7879 -1.10206e-06L25.2121 -1.69547e-06L25.2121 55.0509L9.57576 39.4087L3.17034e-06 48.988L32 81L64 48.988Z"
							fill="#111111"
						/>
					</g>
					<defs>
						<clipPath id="clip0_203_2">
							<rect
								width="81"
								height="64"
								fill="white"
								transform="translate(64) rotate(90)"
							/>
						</clipPath>
					</defs>
				</svg>
			</div> */}
		</div>
	)
}

export default StrokeScroll
