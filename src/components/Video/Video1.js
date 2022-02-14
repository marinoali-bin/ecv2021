import React from "react"
import "./index.scss"

import Video from "../../assets/vid/video-1.mp4"

const Video1 = () => {
	return (
		<div className="video__ctn">
			<video type="video/mp4" autoPlay loop muted>
				<source src={Video} />
			</video>
		</div>
	)
}

export default Video1
