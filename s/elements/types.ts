import {StateGetter, StateSetter} from "@chasemoskal/magical";

export interface InputProps {
	name: undefined | boolean
	email: undefined | boolean
	phone: undefined | boolean
}

export type SelectedAddons = {
	Online_service: {selected: boolean, cost: number}
	Larger_storage: {selected: boolean, cost: number}
	Customizable_profile: {selected: boolean, cost: number}
}

export type SetSelectedAddons = StateSetter<{
	Online_service: {selected: boolean, cost: number}
	Larger_storage: {selected: boolean, cost: number}
	Customizable_profile: {selected: boolean, cost: number}
}>

export type PlanType = "Arcade" | "Pro" | "Advanced"

export interface Properties {
	page?: number
	setPage: StateSetter<number>
	yearly: boolean
	setYearly: StateSetter<boolean>
	selectedAddons: SelectedAddons
	setSelectedAddons: SetSelectedAddons
	plan: {
		planID: PlanType;
		cost: number;
	}
	setPlan: StateSetter<{
		planID: PlanType
		cost: number
	}>
	getSelectedAddons: StateGetter<SelectedAddons>
}