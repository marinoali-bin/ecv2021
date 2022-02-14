import React, {
	useRef,
	useEffect,
	useState,
	createContext,
	useContext
} from "react"
import "./App.scss"
import CustomCursor from "./components/CustomCursor"
import useWindowSize from "./hooks/useWindowSize"

import Header from "./components/Header"
import Acceuil from "./pages/Acceuil"
import Contacts from "./pages/Contacts"
import Formation from "./pages/Formation"
import Outils from "./pages/Outils"
import Portfolio from "./pages/Portfolio"
import Moi from "./pages/Moi"
import Qui from "./pages/Qui/Qui"
import Loading from "./pages/Loading/Loading"

import { gsap, Power3, Elastic, Back } from "gsap"
//import { CSSPlugin } from "gsap/CSSPlugin"
import { CustomEase } from "gsap/CustomEase"

// let myEase = CustomEase.create(
// 	"custom",
// 	"M0,0 C0,0 0.056,-0.016 0.192,-0.03 0.531,-0.064 0.324,1.018 0.536,1.054 0.681,1.078 0.698,0.944 0.756,0.944 0.82,0.944 0.804,1.021 0.85,1.022 0.892,1.022 0.908,1 0.956,1 0.989,1 1,1 1,1 "
// )
const pageContext = createContext(null)

let myEase = CustomEase.create(
	"custom",
	"M0,0 C0,0 0.057,0.019 0.074,0 0.164,-0.156 0.238,-0.13 0.328,-0.09 0.486,-0.018 0.346,1.018 0.558,1.054 0.703,1.078 0.698,0.944 0.756,0.944 0.82,0.944 0.804,1.021 0.85,1.022 0.892,1.022 0.908,1 0.956,1 0.989,1 1,1 1,1 "
)

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

function App() {
	const size = useWindowSize()
	const app = useRef()
	const scrollContainer = useRef()
	const carre = useRef()

	const [loading, setLoading] = useState(true)
	//const [page, setPage] = useState("")

	const skewConfigs = {
		ease: 0.1,
		current: 0,
		previous: 0,
		rounded: 0
	}

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 5000)

		targetsCursor()
	}, [loading])

	useEffect(() => {
		document.body.style.height = `${
			scrollContainer.current.getBoundingClientRect().height
		}px`
	}, [size.height])

	//skewScrolling

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

	const handleLoadPage = () => {
		console.log("handleLoadPage !!!")
		setLoading(false)
	}

	return (
		<div ref={app} className="App">
			<CustomCursor />

			<div ref={scrollContainer} className="scroll">
				<Header />
				<Acceuil />
				<Qui />
				<Moi />
				<Portfolio />
				<Outils />
				<Formation />
				<Contacts />
			</div>
		</div>
	)
}

export default App
