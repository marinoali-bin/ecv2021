import React from "react"
import "./test.scss"

const objet = {
	width: "100%",
	height: "100vh",
	borderBottm: "1px solid black",
	display: "flex",
	flexDirection: "column"
}

const Test = () => {
	return (
		<div style={objet}>
			<div className="content">
				<h1 className="texte">REEBOOK RTA2</h1>
				<img
					src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
					alt=""
				/>

				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Praesentium cupiditate repudiandae soluta iste assumenda
					minus ut molestias quos, quae tenetur consectetur incidunt
					quod?
				</p>
			</div>
		</div>
	)
}

export default Test
