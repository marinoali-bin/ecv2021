import React, { useEffect } from "react"
import Scrollbar from "smooth-scrollbar"
import "./smooth-scroll.scss"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const options = {
	damping: 0.07
}

const Scroll = () => {
	useEffect(() => {
		const h = document.querySelector("#scroll-container").clientHeight
		document.body.style.height = h
	}, [])

	useEffect(() => {
		const ele = document.querySelector("#scroll-container")
		const bodyScrollBar = Scrollbar.init(ele, options)

		ScrollTrigger.scrollerProxy(ele, {
			scrollTop(value) {
				if (arguments.length) {
					bodyScrollBar.scrollTop = value
				}
				return bodyScrollBar.scrollTop
			}
		})
		bodyScrollBar.addListener(ScrollTrigger.update)
		ScrollTrigger.defaults({ ele: ele })
	}, [Scrollbar])

	return null
}

export default Scroll
