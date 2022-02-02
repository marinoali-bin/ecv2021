import React, { useRef, useEffect, useState } from "react"
import "./App.scss"
import CustomCursor from "./composnents/CustomCursor"
import Acceuil from "./pages/Acceuil"
import Contacts from "./pages/Contacts"
import Formation from "./pages/Formation"
import Portfolio from "./pages/Portfolio"
import useWindowSize from "./hooks/useWindowSize"
//import Test from "./pages/Test/Test"
import Outils from "./pages/Outils"
import Moi from "./pages/Moi"
import ScrollTest from "./pages/ScrollTest"

function App() {
	const size = useWindowSize()
	const app = useRef()
	const scrollContainer = useRef()
	const carre = useRef()

	const skewConfigs = {
		ease: 0.1,
		current: 0,
		previous: 0,
		rounded: 0
	}

	useEffect(() => {
		document.body.style.height = `${
			scrollContainer.current.getBoundingClientRect().height
		}px`
	}, [size.height])

	useEffect(() => {
		requestAnimationFrame(() => skewScrolling())
	}, [])

	const skewScrolling = () => {
		skewConfigs.current = window.scrollY

		skewConfigs.previous +=
			(skewConfigs.current - skewConfigs.previous) * skewConfigs.ease

		skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100

		// variables

		const difference = skewConfigs.current - skewConfigs.rounded
		const acceleration = difference / size.width
		const velocy = +acceleration
		const skew = velocy * 7.5

		//
		scrollContainer.current.style.transform = `translateY(-${
			skewConfigs.rounded
		}px) skewY(${skew * 1.5}deg)`
		requestAnimationFrame(() => skewScrolling())
	}

	return (
		<div ref={app} className="App">
			<CustomCursor etatCurs />
			<div className="carre" ref={carre}></div>
			<div ref={scrollContainer} className="scroll">
				<Acceuil />
				<Moi />
				<Portfolio />
				{/* <Outils />
				<Formation />
				<Contacts /> */}
			</div>
		</div>
	)
}

export default App
