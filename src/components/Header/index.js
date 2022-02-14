import React from "react"
import "./style.scss"

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<h1>
					<span>marino</span>alibin
				</h1>
			</div>
			<div className="hamburger cfx">
				<div className="hamburger__line"></div>
				<div className="hamburger__line"></div>
				<div className="hamburger__line"></div>
			</div>
		</div>
	)
}

export default Header
