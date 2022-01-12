import React, { useEffect, useRef } from "react"
import lottie from "lottie-web"
import "./style.scss"

const Acceuil = () => {
	const signatureCtn = useRef(null)

	useEffect(() => {
		lottie.loadAnimation({
			container: signatureCtn.current,
			render: "svg",
			loop: false,
			autoplay: true,
			animationData: require("../../assets/animations/signature.json")
		})
	}, [])

	return (
		<div className="page home">
			<div ref={signatureCtn} className="signature"></div>
		</div>
	)
}

export default Acceuil
