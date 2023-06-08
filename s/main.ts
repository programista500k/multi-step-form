import {styles} from "./elements/style.css.js"
import {InfoPanel} from "./elements/element.js"
import {registerElements, themeElements} from "@chasemoskal/magical"

const getElements = () => ({InfoPanel})

registerElements(
	themeElements(
		styles,
		getElements()
	)
)