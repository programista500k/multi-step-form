import {html} from "lit"
import {view} from "@chasemoskal/magical"
import {InputProps, Properties} from "../types.js"
import {createRef, ref} from "lit/directives/ref.js"

export const PersonalInfo = view({}, use => ({ setPage }: Properties) => {

	const [isInputValidated, setInputValidity] = use.state<InputProps>({
		name: undefined,
		email: undefined,
		phone: undefined
	})

	const nameRef = createRef()
	const emailRef = createRef()
	const phoneRef = createRef()

	function checkFormValidity() {
		const isNameValid = (nameRef.value as HTMLInputElement).checkValidity()
		const isEmailValid = (emailRef.value as HTMLInputElement).checkValidity()
		const isPhoneValid = (phoneRef.value as HTMLInputElement).checkValidity()
		
		if (isEmailValid && isPhoneValid && isNameValid) setPage(1)
		else setInputValidity({ phone: isPhoneValid, email: isEmailValid, name: isNameValid })
	}

	return html`
		<form class="main-panel personal-info">

				<div class="flex-box">
					<div class="header">
						<h1>Personal info</h1>
						<p>Please provide your name, email address, and phone number.</p>
					</div>

					<div class="inputs">
						<div class=labels>
							<label for="name">Name</label>
							${isInputValidated.name === false
							? html`<label class="label-invalid">This field is required</label>`
							: null}
						</div>
						<input ${ref(nameRef)} type="text"
							required data-validated=${isInputValidated.name}
							placeholder="e.g. Stephen King" name="name" type="text">
						<div class=labels>
							<label for="email">Email Address</label>
							${isInputValidated.email === false
							? html`<label class="label-invalid">This field is required</label>`
							: null}
						</div>
						<input ${ref(emailRef)} 
							data-validated=${isInputValidated.email}
							size="30" required type="email" name="email"
							placeholder="e.g. stephenking@lorem.com">
						<div class=labels>
							<label for="phone">Phone Number</label>
							${isInputValidated.phone === false
							? html`<label class="label-invalid">This field is required</label>`
							: null}
						</div>
						<input ${ref(phoneRef)} data-validated=${isInputValidated.phone} type="tel" pattern="[+]{1}[0-9]{11,14}" required placeholder="e.g. +1 234 56 890">
					</div>
				</div>

				<div class=buttons>
					<button
						type="submit"
						class="btn-forward"
						@pointerdown=${checkFormValidity}>
						Next Step
					</button>
				</div>

		</form>
	`
})

