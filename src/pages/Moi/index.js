import React from "react"
import "./style.scss"

const Moi = () => {
	return (
		<div className="page moi">
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
			<div className="content">
				<div className="photo" style={{ zIndex: 1 }}>
					<img
						src="https://images.unsplash.com/photo-1595411425732-e69c1abe2763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						alt=""
					/>
				</div>
				<span className="nano" style={{ zIndex: 2 }}>
					13-34-98-- ACT VERSION
				</span>
				<p style={{ zIndex: 2 }}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Atque porro neque ex sequi animi voluptas totam deleniti!
				</p>
			</div>
			<div className="bidTxt-ctn">
				<h1>
					<span className="bidTxt txt1">MAR</span>
				</h1>
				<h1>
					<span className="bidTxt txt2">INO</span>
				</h1>
			</div>
		</div>
	)
}

export default Moi
