import {view} from "@chasemoskal/magical"
import {html} from "lit"
import {Properties} from "../types"
import {renderAddons} from "../utils/render-addons.js"

export const Summary = view({}, use => (
	{
		setPage,
		yearly,
		selectedAddons,
		plan: {planID, cost}
	}: Properties) => {

	const {addons, addonsCost} = renderAddons(selectedAddons)

	return html`
		<div class="main-panel">

			<div class="summary">
				<div class="header">
					<h1>Finishing up</h1>
					<p>Double-check everything looks OK before confirming.</p>
				</div>

				<div class="summary-box">
					<div class="plan-box">
						<div>
							<h3>${planID} ${yearly ? "(Yearly)" : "(Monthly)"}</h3>
							<a @pointerdown=${() => setPage(1)}>Change</a>
						</div>
						<span>$${cost}/mo</span>
					</div>
					<div class=line></div>
					<div class="selected-addons">
						${addons}
					</div>
				</div>

				<div class="total-cost">
					<p>Total (per month/year)</p><span>+$${cost + addonsCost}/mo</span>
				</div>
			</div>

			<div class=buttons>
				<button class="btn-back" @pointerdown=${() => setPage(2)}>Go Back</button>
				<button class="btn-forward" @pointerdown=${() => setPage(4)}>Confirm</button>
			</div>

		</div>
	`
})


