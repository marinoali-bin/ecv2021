import React, { useRef, useState, useEffect } from "react"

//----- Css -----------------------------------
import "./App.scss"

//----- Components et Utils
import CustomCursor from "./components/CustomCursor"
//import useWindowSize from "./hooks/useWindowSize"

//----- Pages comp -----------------------------------
import Header from "./components/Header"
import Acceuil from "./pages/Acceuil"
import Contacts from "./pages/Contacts"
import Formation from "./pages/Formation"
import Outils from "./pages/Outils"
//import Portfolio from "./pages/Portfolio"
//import Moi from "./pages/Moi"
import Qui from "./pages/Qui/Qui"
//import Loading from "./pages/Loading/Loading"

//----- Modules-----------------------------------
import { gsap, Back } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
//import { CSSPlugin } from "gsap/CSSPlugin"
import { CustomEase } from "gsap/CustomEase"
//import Scroll from "./hooks/SmoothScroll"
import Scrollbar from "smooth-scrollbar"

//----- Variables----------------------------

// let myEase = CustomEase.create(
// 	"custom",
// 	"M0,0 C0,0 0.056,-0.016 0.192,-0.03 0.531,-0.064 0.324,1.018 0.536,1.054 0.681,1.078 0.698,0.944 0.756,0.944 0.82,0.944 0.804,1.021 0.85,1.022 0.892,1.022 0.908,1 0.956,1 0.989,1 1,1 1,1 "
// )
//const pageContext = createContext(null)

let myEase = CustomEase.create(
	"custom",
	"M0,0 C0,0 0.057,0.019 0.074,0 0.164,-0.156 0.238,-0.13 0.328,-0.09 0.486,-0.018 0.346,1.018 0.558,1.054 0.703,1.078 0.698,0.944 0.756,0.944 0.82,0.944 0.804,1.021 0.85,1.022 0.892,1.022 0.908,1 0.956,1 0.989,1 1,1 1,1 "
)

//----- Func----------------------------

const targetsCursor = () => {
	//const tCurso = document.querySelector(".tcursor1")
	//tCurso.addEventListener("mouseenter", (e) => console.log(e))

	//const tCursors = document.querySelectorAll(".tcursor")

	const c1 = document.querySelector(".cercle1")
	const c2 = document.querySelector(".cercle2")

	let scale = 2

	gsap.utils.toArray(".cfx").forEach((element) => {
		let ele = element

		ele.addEventListener("mouseenter", (e) => {
			gsap.to(c1, {
				scale: scale,
				duration: 0.8,
				ease: myEase,
				onStart: () => {
					c1.classList.add("filtrer")
					//console.log(c1.classList)
				}
			})
			gsap.to(c2, {
				scale: 0,
				opacity: 0,
				duration: 1.3,
				ease: myEase,
				onStart: () => {
					c1.classList.remove("filtrer")
					//console.log(c1.classList)
				}
			})
		})
		ele.addEventListener("mouseleave", (e) => {
			gsap.to(c1, {
				scale: 1,
				duration: 0.6,
				ease: Back.easeInOut
			})
			gsap.to(c2, {
				scale: 1,
				opacity: 1,
				duration: 1.3,
				ease: myEase
			})
		})
	})
}

//gsap.registerPlugin(ScrollTrigger)

//-------APP-------------------------------------------

function App() {
	// scrolltrigger smooth scrollbar sync

	const options = {
		damping: 0.07
		//renderByPixels: true
		// delegateTo: document,
		// alwaysShowTracks: true
	}

	// Lasssssst

	const scroller = useRef()

	useEffect(() => {
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

		// This part is only neccessary if you're using ScrollTrigger's markers for testing:
		if (document.querySelector(".gsap-marker-scroller-start")) {
			const markers = gsap.utils.toArray('[class *= "gsap-marker"]')
			bodyScrollBar.addListener(({ offset }) =>
				gsap.set(markers, { marginTop: -offset.y })
			)
		}
	}, [])

	useEffect(() => {
		targetsCursor()
	}, [])

	return (
		<div className="App">
			<CustomCursor />
			{/* <Scroll /> */}

			<div
				className="scroller"
				ref={scroller}
				id="scroller"
				data-scrollbar
			>
				<Header />
				<Acceuil />
				<Qui />
				{/* <Portfolio /> */}
				<Outils />
				<Formation />
				<Contacts />
			</div>
		</div>
	)
}

export default App
