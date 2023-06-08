import {html} from "lit"
import {SelectedAddons} from "../types"

export const renderAddons = (selectedAddons: SelectedAddons) => {
	let addonsCost = 0
	const addons = []
	for (const [serviceName, {cost, selected}] of Object.entries(selectedAddons)) {
		if (selected) {
			addonsCost += cost
			addons.push(
				html`
				<p>${serviceName.split("_")[0]} ${serviceName.split("_")[1]}<span>+${cost}/mo</span></p>
				`)
		}
	}
	return {
		addons: addons.map(a => a),
		addonsCost
	}
}