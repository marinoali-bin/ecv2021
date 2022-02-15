import React, { useEffect, useRef } from "react"
//import lottie from "lottie-web"
import "./style.scss"
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
//import DigitalDesigner from "../../components/DigitalDesigner"
//import Video1 from "../../components/Video/Video1"
import Lion from "../../components/Lion"

import { CustomEase } from "gsap/CustomEase"
import StrokeScroll from "../../components/StrokeScroll"

gsap.registerPlugin(ScrollTrigger, CustomEase)

const Acceuil = () => {
	//const signatureCtn = useRef(null)
	const homePage = useRef(null)
	//const txtBox = useRef(null)

	// let myEase = CustomEase.create(
	// 	"custom",
	// 	"M0,0 C0,0 0.057,0.019 0.074,0 0.164,-0.156 0.238,-0.13 0.328,-0.09 0.486,-0.018 0.346,1.018 0.558,1.054 0.703,1.078 0.698,0.944 0.756,0.944 0.82,0.944 0.804,1.021 0.85,1.022 0.892,1.022 0.908,1 0.956,1 0.989,1 1,1 1,1 "
	// )

	useEffect(() => {
		let mesLignes = gsap.utils.toArray(".ligne")
		let ligneCachee = document.querySelector(".ligne__cachee")
		let ligneAcacher = document.querySelector(".ligne__acacher")

		gsap.from(mesLignes, {
			y: "+= 200%",

			duration: 1.3,
			ease: Power3.easeOut,
			stagger: 0.35,
			delay: 0.8
		})

		gsap.set(ligneCachee, {
			y: "+= 200%"
		})

		gsap.to([ligneCachee, ligneAcacher], {
			yPercent: "-200",
			duration: 0.8,
			scrollTrigger: {
				trigger: ligneAcacher,
				start: "top 80%",
				stagger: 0.5,
				//markers: true,
				toggleActions: "play none  reverse none",
				ease: Power3.easeInOut
			}
		})
	}, [])

	return (
		<>
			{/* <Video1 /> */}
			<Lion />
			<div ref={homePage} className="page home">
				<StrokeScroll />
				<div className="texte__box">
					<h1>
						<span className="ligne">/ Digital </span>
					</h1>
					<h1>
						<span className="ligne ligne__acacher lignes__abouger">
							Designer
						</span>
						<span className="ligne__cachee lignes__abouger">
							Developper
						</span>
					</h1>
				</div>
			</div>
		</>
	)
}

export default Acceuil
