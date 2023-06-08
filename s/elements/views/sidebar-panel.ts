import {view} from "@chasemoskal/magical"
import {html} from "lit"

export const SidebarPanel = view({}, use => (page: number) => {
	return html`
		<div class="sidebar">

			<div class="flex-inline">
				<span data-checked=${page === 0} class="indicator">1</span>
				<div class=step>
					<span>STEP 1</span>
					<p>YOUR INFO</p>
				</div>
			</div>

			<div class="flex-inline">
				<span data-checked=${page === 1} class="indicator">2</span>
				<div class=step>
					<span>STEP 2</span>
					<p>SELECT PLAN</s>
				</div>
			</div>

			<div class="flex-inline">
				<span data-checked=${page === 2} class="indicator">3</span>
				<div class=step>
					<span>STEP 3</span>
					<p>ADD-ONS</p>
				</div>
			</div>

			<div class="flex-inline">
				<span data-checked=${page === 3} class="indicator">4</span>
				<div class=step>
					<span>STEP 4</span>
					<p>SUMMARY</p>
				</div>
			</div>

		</div>
	`
})
