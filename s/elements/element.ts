import {html} from 'lit';
import {PlanType} from './types.js';
import {Footer} from './views/footer.js';
import {SidebarPanel} from './views/sidebar-panel.js';
import {getActivePanel} from './utils/get-active-panel.js';
import {MagicElement, UseElement} from "@chasemoskal/magical"

export class InfoPanel extends MagicElement {
	realize(use: UseElement<typeof this>) {
		const [page, setPage] = use.state(0)
		const [yearly, setYearly] = use.state(false)
		const [plan, setPlan] = use.state<{planID: PlanType, cost: number}>({planID: "Arcade", cost: 9})
		const [selectedAddons, setSelectedAddons, getSelectedAddons] = use.state({
			Online_service: {selected: false, cost: 1},
			Larger_storage: {selected: false, cost: 2},
			Customizable_profile: {selected: false, cost: 2},
		})

		const ActivePanel = getActivePanel(page)

		return html`
			${SidebarPanel(page)}
			${ActivePanel({page, setPage, yearly, setYearly, plan, setPlan, selectedAddons, setSelectedAddons, getSelectedAddons})}
			${Footer()}
		`
	}
}