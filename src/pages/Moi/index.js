import React, { useEffect, useRef } from "react"
import "./style.scss"
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Moi = ({ scrollCtn }) => {
	const contenAnimCible = useRef(null)
	const bigTxt = useRef(null)
	const bigL = useRef()

	const tl = gsap.timeline({
		ease: Power3.easeOut
	})

	// scrollTrigger: {
	//           trigger: element.querySelector(".first"),
	//           start: "top top",
	//           end: "bottom center",
	//           scrub: true,
	//         },

	useEffect(() => {
		//anim du content
		const el1 = contenAnimCible.current
		const el2a = el1.children[0]
		const el2b = el1.children[1]
		const el2c = el1.children[2]

		const caca = tl
			.from(el2a, {
				opacity: "0",
				y: 29,
				duration: 0.9
			})
			.from(
				el2b,
				{
					opacity: "0",
					y: 19,
					duration: 0.8
				},
				"<0.6"
			)
			.from(
				el2c,
				{
					opacity: "0",
					y: 19,
					duration: 0.8,
					delay: "<0.6"
				},
				"<0.6"
			)

		ScrollTrigger.create({
			animation: caca,
			trigger: document.querySelector(".content"),
			start: "top 65% ",
			// onEnter: () => console.log("entréee"),
			// onLeave: () => console.log("sortie"),
			//markers: true,
			toggleActions: "play pause none reverse"
		})
	}, [])

	// useEffect(() => {
	// 	//anim du content
	// 	const el1 = contenAnimCible.current
	// 	const el2a = el1.children[0]
	// 	const el2b = el1.children[1]
	// 	const el2c = el1.children[2]

	// 	const go = () => {
	// 		tl.from(el2a, {
	// 			opacity: "0",
	// 			y: 29,
	// 			delay: 1.3,
	// 			duration: 1
	// 		})
	// 			.from(
	// 				el2b,
	// 				{
	// 					opacity: "0",
	// 					y: 19,
	// 					duration: 0.8
	// 				},
	// 				"<0.6"
	// 			)
	// 			.from(
	// 				el2c,
	// 				{
	// 					opacity: "0",
	// 					y: 19,
	// 					delay: "<0.6"
	// 				},
	// 				"<0.4"
	// 			)
	// 	}
	// 	go()
	// }, [])

	useEffect(() => {
		//anim du bigTxt

		gsap.utils.toArray(".bigTxt").forEach((elem, i) => {
			gsap.from(
				elem,
				{
					yPercent: 50,
					autoAlpha: 0,
					duration: 1,
					stagger: 33
				},
				"<.3"
			)
		})
	}, [])

	return (
		<div className="page moi">
			<div ref={contenAnimCible} className="content">
				<div className="photo" style={{ zIndex: 1 }}>
					<img
						src="https://images.unsplash.com/photo-1595411425732-e69c1abe2763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						alt=""
					/>
				</div>

				<span className="nano" style={{ zIndex: 2 }}>
					13-34-98-- ACT VERSION
				</span>
				<p style={{ zIndex: 2 }}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Atque porro neque ex sequi animi voluptas totam deleniti!
				</p>
			</div>
			<div ref={bigTxt} className="bigTxt-ctn">
				<h1>
					<span ref={bigL} className="bigTxt ">
						MAR
					</span>
				</h1>
				<h1>
					<span ref={bigL} className="bigTxt">
						INO
					</span>
				</h1>
			</div>
		</div>
	)
}

export default Moi
