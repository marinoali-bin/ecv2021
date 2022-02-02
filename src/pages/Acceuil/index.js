import React, { useEffect, useRef } from "react"
import lottie from "lottie-web"
import "./style.scss"
import { gsap, Power3, Power4, Back } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import DigitalDesigner from "../../composnents/DigitalDesigner"

gsap.registerPlugin(ScrollTrigger)

const Acceuil = () => {
	const signatureCtn = useRef(null)
	const homePage = useRef(null)

	useEffect(() => {
		setTimeout(() => {
			lottie.loadAnimation({
				container: signatureCtn.current,
				render: "svg",
				loop: false,
				autoplay: true,
				animationData: require("../../assets/animations/signature.json")
			})
		}, 500)
	}, [document])

	useEffect(() => {
		const volet = () => {
			gsap.to(
				signatureCtn.current,
				{
					y: "-250px",
					opacity: 0,
					duration: 1,
					ease: "back.inOut(2)"
				},
				">4.2"
			)
			gsap.to(
				".volet",
				{
					scaleY: 1,
					ease: "power4.inOut",
					duration: 1
				},
				"<.4"
			)
			gsap.to(
				".home",
				{
					backgroundColor: "#111",
					duration: 0.2
				},
				">1"
			)

			let bodyElement = document.getElementsByTagName("body")
			bodyElement.bgColor = "#111"
			//console.log(bodyElement.bgColor)
		}

		//homePage.current.style.backgroundColor = "#244676"
		// gsap.to(".home", {
		// 	backgroundColor: "#111",
		// 	duration: 0.4,
		// 	ease: Power3.easeOut,
		// 	scrollTrigger: {
		// 		trigger: ".home",
		// 		//markers: true,
		// 		onEnter: () => {
		// 			console.log("entree")
		// 		},
		// 		onLeave: () => {
		// 			console.log("sortie")
		// 		},
		// 		start: "bottom 70%",
		// 		//end: "bottom 50%",
		// 		//scrub: true,
		// 		toggleActions: "play pause none reverse"
		// 	}
		// })

		//gsap.to(".homePage")
		volet()
	}, [])

	return (
		<>
			<div ref={homePage} className="page home">
				<div className="volet">
					<DigitalDesigner />
				</div>
				<div ref={signatureCtn} className="signature"></div>
			</div>
		</>
	)
}

export default Acceuil
