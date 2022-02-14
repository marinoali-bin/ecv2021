import React, { useEffect, useRef } from "react"
import lottie from "lottie-web"
import "./index.scss"

const Loading = ({ handleLoadPage, Loading }) => {
	const signatureCtn = useRef(null)

	const signatureFx = () => {
		lottie.loadAnimation({
			container: signatureCtn.current,
			render: "svg",
			loop: false,
			autoplay: true,
			animationData: require("../../assets/animations/signature.json")
		})
	}

	useEffect(() => {
		setTimeout(signatureFx(), 1000)

		setTimeout(() => {
			handleLoadPage()
		}, 5000)
	}, [document])

	return (
		<div className="loading">
			<div className="volet"></div>
			<div ref={signatureCtn} className="signature cfx"></div>
		</div>
	)
}

export default Loading
