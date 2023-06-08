import {Summary} from '../views/summary.js';
import {PickAddons} from '../views/pick-addons.js';
import {ThankPanel} from '../views/thank-panel.js';
import {PlanSelect} from '../views/plan-select.js';
import {PersonalInfo} from '../views/personal-info.js';

export function getActivePanel(page: number) {
	const panels = [PersonalInfo, PlanSelect, PickAddons, Summary, ThankPanel]
	return panels[page]
}