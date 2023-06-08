import {html} from "lit"
import {Properties} from "../types"
import {view} from "@chasemoskal/magical"
import {setupSetAddon} from "../utils/set-addon.js"

export const PickAddons = view({}, use => (
	{
		setPage,
		setSelectedAddons,
		getSelectedAddons
	}: Properties) => {

	const {setAddon} = setupSetAddon(setSelectedAddons)
	const {Online_service, Larger_storage, Customizable_profile} = getSelectedAddons()

	return html`
		<div class="main-panel addons">

			<div class="flex-box">
				<div class="header">
					<h1>Pick add-ons</h1>
					<p>Add-ons help enhance your gaming experience.</p>
				</div>

				<div
					class="addon-box"
					data-checked=${Online_service.selected}
					@pointerdown=${() => setAddon("Online_service", 1)}>

					<input ?checked=${Online_service.selected} type="checkbox">
					<div class="addon">
						<h3>Online service</h3>
						<p>Access to multiplayer games</p>
					</div>
					<span>+$1/mo</span>

				</div>

				<div
					class="addon-box"
					data-checked=${Larger_storage.selected}
					@pointerdown=${() => setAddon("Larger_storage", 2)}>

					<input ?checked=${Larger_storage.selected} type="checkbox">
					<div class="addon">
						<h3>Larger storage</h3>
						<p>Extra 1TB of cloud save</p>
					</div>
					<span>+$2/mo</span>

				</div>

				<div
					class="addon-box"
					data-checked=${Customizable_profile.selected}
					@pointerdown=${() => setAddon("Customizable_profile", 2)}>

					<input ?checked=${Customizable_profile.selected} type="checkbox">
					<div class="addon">
						<h3>Customizable Profile</h3>
						<p>Custom theme on your profile</p>
					</div>
					<span>+$2/mo</span>

				</div>
			</div>

			<div class="buttons">
				<button class="btn-back" @pointerdown=${() => setPage(1)}>Go Back</button>
				<button class="btn-forward" @pointerdown=${() => setPage(3)}>Next Step</button>
			</div>

		</div>
	`
})