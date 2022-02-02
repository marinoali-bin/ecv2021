import React, { useRef, useEffect } from "react"
import datas from "./data.portfolio"
import VanillaTilt from "vanilla-tilt"
import "./style.scss"

const Portfolio = () => {
	const options = {
		scale: 1.03,
		speed: 800,
		max: 10,
		easing: "cubic-bezier(.03,.98,.52,.99)",
		transition: true,
		perspective: 800
	}

	function Tilt(props) {
		const { options, ...rest } = props
		const tilt = useRef(null)

		useEffect(() => {
			VanillaTilt.init(tilt.current, options)
		}, [options])

		return <div ref={tilt} {...rest} />
	}

	const creations = datas.map((data) => {
		return (
			<Tilt options={options} key={data.id} className="portfolio-ctn">
				<div className="backBox"></div>
				<div className="illustration">
					<img
						//style={{ zIndex: "110" }}
						src={data.imageUrl}
						alt={data.nomProjet}
					/>
				</div>
				<div className="title">{data.nomProjet}</div>

				{/* <div className="description">{data.description}</div> */}
			</Tilt>
		)
	})

	return (
		<div className="page ptflio">
			<div className="portfolio">{creations[1]}</div>

			<div className="mini lBtn">
				<div className="txt">precedant</div>
				<div className="traits-fins">
					<div className="trait-fin"></div>
					<div className="trait-fin"></div>
				</div>
			</div>

			<div className="rBtn">
				<div className="mini txt">suivant</div>
				<div className="traits-fins">
					<div className="trait-fin"></div>
					<div className="trait-fin"></div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
