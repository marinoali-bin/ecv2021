import { cursorRef2 } from "./index"

export const cursorAnimEnter = (c2) => {
	c2.current.style.add("actif")
}

export const cursorAnimOut = (c2) => {
	c2.style.remove("actif")
}
