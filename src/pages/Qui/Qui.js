import React, { useEffect, useState, useRef } from "react"
import "./style.scss"
import gsap, { Power2 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Scrollbar from "smooth-scrollbar"
import SplitText from "../../utils/Split3.min"

const Qui = () => {
	const [webFontsLoaded, setWebFontsLoaded] = useState(false)

	const quiPage = document.querySelector(".quiPage")
	const carreVert = document.querySelector(".carre__vert")
	//let quiBox1 = document.querySelector(".quiBox1")
	const triGGa = document.querySelector(".trigga")

	const QuiTxt = useRef(null)

	useEffect(() => {
		async function areFontsReady() {
			await document.fonts.ready
			setWebFontsLoaded(true)
		}

		areFontsReady()
	}, [])

	useEffect(() => {
		if (webFontsLoaded) {
			console.log("Fonts prets")
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

			// animation texte

			const Qui = gsap.utils.toArray(QuiTxt)

			const split = new SplitText(QuiTxt.current, {
				type: "lines, words, chars",
				linesClass: "linesChildren"
			})

			const splitParent = new SplitText(QuiTxt.current, {
				type: "lines, words, chars",
				linesClass: "linesParent"
			})

			bodyScrollBar.addListener(ScrollTrigger.update)

			const lines = split.lines
			const linesParent = splitParent.lines
			const words = split.words

			gsap.set(linesParent, {
				overflow: "hidden"
			})

			gsap.fromTo(
				lines,
				{
					y: 150,
					opacity: 0
				},
				{
					y: 0,
					opacity: 0.9,
					ease: Power2.easeInOut,
					stagger: 0.07,
					duration: 0.8,
					scrollTrigger: {
						trigger: linesParent,
						start: "top 60%",
						end: "top 60%",
						markers: true,
						scroller: document.querySelector("#scroller"),
						toggleActions: "restart none none reverse"
					}
				}
			)

			// This part is only neccessary if you're using ScrollTrigger's markers for testing:
			if (document.querySelector(".gsap-marker-scroller-start")) {
				const markers = gsap.utils.toArray('[class *= "gsap-marker"]')
				bodyScrollBar.addListener(({ offset }) =>
					gsap.set(markers, { marginTop: -offset.y })
				)
			}
		}
	}, [webFontsLoaded])

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
			{/* <div className="trigga"></div> */}
			{/* <div className="carre__vert"></div> */}
			<div className="quiBox1">
				<h1 ref={QuiTxt} className="qui_txt titre">
					Communication
					<br />
					Créativité
					<br />
					Developpement
				</h1>

				<p ref={QuiTxt} className="qui_txt">
					Mon approche en therme de service web ne se limite pas qu'a
					l'attration visuel que j'offre. Mon approche de la
					conception et du marketing numériques va au-delà de la
					simple création d'un travail de conception attrayant.
				</p>

				{/* <p className="qui_txt">
					Travailler en étroite collaboration avec vous et acquérir
					une compréhension plus approfondie de votre entreprise est
					essentiel, car cela m'aide à créer une identité unique pour
					votre site Web, qui transmettra immédiatement votre
					histoire.
				</p> */}

				{/* <p className="qui_txt p">
					Mon approche en therme de service web ne se limite pas qu'a
					l'attration visuel que j'offre. Mon approche de la
					conception et du marketing numériques va au-delà de la
					simple création d'un travail de conception attrayant.
					Travailler en étroite collaboration avec vous et acquérir
					une compréhension plus approfondie de votre entreprise est
					essentiel, car cela m'aide à créer une identité unique pour
					votre site Web, qui transmettra immédiatement votre histoire
					dès que votre client atterrira sur votre page d'accueil.
				</p> */}
				{/* <div className="qui__txtBlock__1">
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
