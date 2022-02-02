import React from "react"
import VanillaTilt from "vanilla-tilt"

const Tilt = ({ rootNode }) => {
	const options = {
		scale: 1.2,
		speed: 1000,
		max: 30
	}

	VanillaTilt.init(rootNode, {
		max: 25,
		speed: 400,
		glare: true,
		"max-glare": 0.1
	})

	useEffect(() => {
		VanillaTilt.init(tilt.current, options)
	}, [options])

	return <div></div>
}

export default Tilt
