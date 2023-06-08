import {Ref} from "lit/directives/ref"
import {StateSetter} from "@chasemoskal/magical"

export function checkFormValidity(e: PointerEvent, setPage: StateSetter<number>, emailRef: Ref<Element>, phoneRef: Ref<Element>) {
	const button = e.currentTarget as HTMLButtonElement
	const formIsValid = button.closest('form')?.checkValidity()
	if(formIsValid)
		setPage(1)
}