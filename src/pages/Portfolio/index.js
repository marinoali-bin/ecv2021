import React from "react"
import "./style.scss"
import datas from "./data.portfolio"

const Portfolio = () => {
	const creations = datas.map((data) => {
		return (
			<div key={data.id} className="portfolio-ctn">
				<div className="title">{data.nomProjet}</div>
				<div className="illustration">
					<img src={data.imageUrl} alt={data.nomProjet} />
				</div>
				<div className="description">{data.description}</div>
			</div>
		)
	})

	return (
		<div className="page">
			<div className="portfolio">{creations}</div>
			<div className="slideBtn prec"></div>
			<div className="slideBtn suiv"></div>
		</div>
	)
}

export default Portfolio
