import {html} from "lit"
import {view} from "@chasemoskal/magical"

export const ThankPanel = view({}, use => () => {
	return html`
		<div class="main-panel thank-panel">
			<div>
				<img src="./assets/images/icon-thank-you.svg"/>
				<h1>Thank you!</h1>
				<p>
					Thanks for confirming your subscription! We hope you have fun
					using our platform. If you ever need support, please feel free
						to email us at support@loremgaming.com.
				</p>
			</div>
		</div>
	`
})


