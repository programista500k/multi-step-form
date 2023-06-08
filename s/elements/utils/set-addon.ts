import {SelectedAddons, SetSelectedAddons} from "../types"

export const setupSetAddon = (setSelectedAddons: SetSelectedAddons) => {
	return {
		setAddon: (addon: keyof SelectedAddons, cost: number) => {
			setSelectedAddons((prevState) => ({
		...prevState,
		[addon]: {
			selected: !prevState[addon].selected,
			cost: cost
		},
	}))
		}
	}
}