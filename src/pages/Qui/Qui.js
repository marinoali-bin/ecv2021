import React, { useEffect, useRef } from "react"
import "./style.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

const Qui = () => {
	let conteneur = useRef()
	let maBox = useRef()

	useEffect(() => {
		let q = gsap.utils.toArray(".ligne__deco__1")

		q.forEach((qt) => {
			gsap.fromTo(
				qt,
				{
					scaleX: 0
				},
				{
					scaleX: 1,
					duration: 2,
					scrollTrigger: {
						trigger: qt,
						start: "top 95%",
						end: "top 70%",
						scrub: 0.5,
						//markers: true,
						toggleActions: "play none reverse none"
					}
				}
			)
		})
	}, [])

	useEffect(() => {
		gsap.to(maBox.current, {
			x: 700,
			ease: "none",
			scrollTrigger: {
				trigger: conteneur.current,
				pin: true,
				scrub: 1,
				markers: true,
				start: "top top",
				//snap: 1 / (quiPage.length - 1),
				end: () => "+=" + conteneur.current.offsetHeight
			}
		})

		// let aaa = ScrollTrigger.create({
		// 	trigger: quiPage,
		// 	start: "top 80%",
		// 	end: () => `+=${quiPage.offsetHeight - carreId.offsetHeight}`,
		// 	markers: true,
		// 	scrub: 3,
		// 	pin: true,
		// 	pinSpacer: false,
		// 	id: "carreId"
	}, [conteneur])

	return (
		<div ref={conteneur} className="qui">
			<div ref={maBox} className="carre1"></div>
			<div className="quiBox1">
				{/* <div className="qui__txtBlock__1">
					<h1 className="title">
						<span>DEV OPS</span>
					</h1>
					<p>
						<span>Je suis Marino</span>
					</p>
					<p>
						<span>creatif dans numériques independant</span>
					</p>
					<p>
						<span>alliez technique et creativité</span>
					</p>
					<p>
						<span>Dans votre projet</span>
					</p>
				</div> */}
			</div>
		</div>
	)
}

export default Qui
