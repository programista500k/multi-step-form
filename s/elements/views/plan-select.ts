import {html} from "lit"
import {Properties} from "../types"
import {view} from "@chasemoskal/magical"

export const PlanSelect = view({}, use => (
	{
		yearly,
		setYearly,
		setPage,
		setPlan,
		plan: {planID}
	}: Properties) => {

	return html`
		<div class="main-panel plan-select">

			<div class="flex-box">
				<div class="header">
					<h1>Select your plan</h1>
					<p>You have the option of monthly or yearly billing.</p>
				</div>

				<div class="plan-box">
					<div
						class="plan"
						data-checked=${planID === "Arcade"} 
						@pointerdown=${() => setPlan({ planID: "Arcade", cost: 9 })}>

						<img class="icon" src="./assets/images/icon-arcade.svg">
						<h2>Arcade</h2>
						<p>$9/mo</p>
						${yearly ? html`<span>2 months free</span>` : null}
					</div>

					<div
						class="plan"
						data-checked=${planID === "Advanced"}
						@pointerdown=${() => setPlan({ planID: "Advanced", cost: 12 })}>

						<img class="icon" src="./assets/images/icon-advanced.svg">
						<h2>Advanced</h2>
						<p>$12/mo</p>
						${yearly ? html`<span>2 months free</span>` : null}
					</div>

					<div
						class="plan"
						data-checked=${planID === "Pro"} 
						@pointerdown=${() => setPlan({ planID: "Pro", cost: 15 })}>

						<img class="icon" src="./assets/images//icon-pro.svg">
						<h2>Pro</h2>
						<p>$15/mo</p>
						${yearly ? html`<span>2 months free</span>` : null}
					</div>
				</div>

				<div class="slider">
					<p>Monthly</p>
					<div @pointerdown=${() => setYearly(!yearly)} class="button-slide">
						<div class="circle ${yearly ? "yearly" : null}"></div>
					</div>
					<p>Yearly</p>
				</div>
			</div>

			<div class="buttons">
				<button class="btn-back" @pointerdown=${() => setPage(0)}>Go Back</button>
				<button class="btn-forward" @pointerdown=${() => setPage(2)}>Next Step</button>
			</div>

		</div>
	`
})
