import React, { useEffect, useRef } from "react"
import "./style.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import Scrollbar from "smooth-scrollbar"

const Qui = () => {
	const quiPage = document.querySelector(".quiPage")
	const carreVert = document.querySelector(".carre__vert")
	//let quiBox1 = document.querySelector(".quiBox1")
	const triGGa = document.querySelector(".trigga")

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.registerPlugin(ScrollTrigger)
		const scroller = document.querySelector("#scroller")
		const bodyScrollBar = Scrollbar.init(scroller)

		ScrollTrigger.scrollerProxy(scroller, {
			scrollTop(value) {
				if (arguments.length) {
					bodyScrollBar.scrollTop = value
				}
				return bodyScrollBar.scrollTop
			}
		})

		bodyScrollBar.addListener(ScrollTrigger.update)

		gsap.to(document.querySelector(".carre__vert"), {
			xPercent: 280,
			scrollTrigger: {
				trigger: document.querySelector(".carre__vert"),
				start: "top 55%",
				end: () =>
					"+=" +
					document.querySelector(".carre__vert").clientHeight * 2,
				scroller: scroller,
				pin: true,
				scrub: true,
				pinSpacing: false,
				markers: true

				//toggleActions: "play none reverse none"
			}
		})

		// This part is only neccessary if you're using ScrollTrigger's markers for testing:
		if (document.querySelector(".gsap-marker-scroller-start")) {
			const markers = gsap.utils.toArray('[class *= "gsap-marker"]')
			bodyScrollBar.addListener(({ offset }) =>
				gsap.set(markers, { marginTop: -offset.y })
			)
		}
	}, [])

	// useEffect(() => {
	// 	let q = gsap.utils.toArray(".ligne__deco__1")

	// 	q.forEach((qt) => {
	// 		gsap.fromTo(
	// 			qt,
	// 			{
	// 				scaleX: 0
	// 			},
	// 			{
	// 				scaleX: 1,
	// 				duration: 2,
	// 				scrollTrigger: {
	// 					trigger: qt,
	// 					start: "top 95%",
	// 					end: "top 70%",
	// 					scrub: 0.5,
	// 					//markers: true,
	// 					toggleActions: "play none reverse none"
	// 				}
	// 			}
	// 		)
	// 	})
	// }, [])

	// useEffect(() => {
	// 	gsap.to(maBox.current, {
	// 		x: 700,
	// 		ease: "none",
	// 		scrollTrigger: {
	// 			trigger: conteneur.current,
	// 			pin: true,
	// 			scrub: 1,
	// 			markers: true,
	// 			start: "top top",
	// 			//snap: 1 / (quiPage.length - 1),
	// 			end: () => "+=" + conteneur.current.offsetHeight
	// 		}
	// 	})

	// 	// let aaa = ScrollTrigger.create({
	// 	// 	trigger: quiPage,
	// 	// 	start: "top 80%",
	// 	// 	end: () => `+=${quiPage.offsetHeight - carreId.offsetHeight}`,
	// 	// 	markers: true,
	// 	// 	scrub: 3,
	// 	// 	pin: true,
	// 	// 	pinSpacer: false,
	// 	// 	id: "carreId"
	// }, [conteneur])

	return (
		<div className="quiPage">
			<div className="trigga"></div>
			<div className="carre__vert"></div>
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
