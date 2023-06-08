import {css} from "lit";

export const styles = css`
:host {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border-radius: 5px;
	height: 550px;
	max-width: 900px;
	padding: 0.5em;
	position: relative;
}
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Ubuntu';
}
h1,h2 {
	font-weight: 700;
	color: hsl(213, 96%, 18%);
}
:host .main-panel {
	display: flex;
	flex-direction: column;
	gap: 5em;
}
.main-panel {
	padding-right: 4.5em;
	padding-left: 4.5em;
	max-width: 580px;
}
.sidebar {
	background-image: url(../../../assets/images/bg-sidebar-desktop.svg);
	background-size: cover;
	display: flex;
	flex-direction: column;
	background-size: 100% 100%;
	height: 550px;
	min-width: 270px;
	padding: 1em 0.5em;
}
.flex-box {
	display: flex;
	gap: 1.5em;
	height: 350px;
	flex-direction: column;
}
.inputs {
	display: flex;
	flex-direction: column;
}
input {
	padding: 1em;
	border: 2px solid hsl(229, 24%, 87%);
	border-radius: 5px;
}
.inputs label {
	margin: 1em 0 0.4em 0;
	font-weight: 500;
	color: hsl(213, 96%, 18%);
}
.inputs .label-invalid {
	color: hsl(354, 84%, 57%);
}
.labels {
	display: flex;
	justify-content: space-between;
}
input[data-validated=true] {
	border: 1px solid green;
}
input[data-validated=false] {
	border: 1px solid hsl(354, 84%, 57%);
}
.personal-info .buttons {
	align-self: end;
}
p {
	font-size: 16px;
	font-family: 'Ubuntu';
	font-weight: 500;
}
button {
	border: none;
	width: 110px;
	height: 40px;
	border-radius: 5px;
	align-self: end;
}
.btn-forward {
	background-color: hsl(213, 96%, 18%);
	color: white;
}
.btn-back {
	background-color: transparent;
	color: hsl(231, 11%, 63%);
	font-weight: 700;
}
.addons {

}
.addon-box {
	cursor: pointer;
	display: flex;
	border: 1px solid gray;
	padding: 1em 1.5em;
	align-items: center;
	border-radius: 5px;
}
.addon-box[data-checked=true] {
	background-color: hsl(217, 100%, 97%);
}
.addon-box input {
	height: 20px;
	width: 20px;
	accent-color: hsl(213, 96%, 18%);
}
.addon {
	padding-right: 5em;
	padding-left: 1.5em;
	flex: 2;
}
.flex-inline {
	display: flex;
	padding: 1em;
	align-items: center;
}
.flex-inline span:not(.indicator) {
	font-size: 12px;
	color: hsl(231, 11%, 63%);
}
.flex-inline p {
	color: hsl(231, 100%, 99%);
}
.indicator {
	border: 1px solid white;
	padding: 0.6em;
	height: 34px;
	width: 33px;
	justify-content: center;
	margin-right: 1em;
	border-radius: 35px;
	display: flex;
	align-items: center;
	color: white;
	font-weight: 500;

}
.indicator[data-checked=true] {
	background-color: hsl(206, 94%, 87%);
	border: 1px solid hsl(206, 94%, 87%);
	color: black;
}
.plan-box {
	display: flex;
	gap: 1em;
	flex-wrap: wrap;
}
.plan {
	display: flex;
	flex: 1;
	flex-direction: column;
	border: 1px solid gray;
	padding: 1em;
	border-radius: 5px;
	width: 150px;
	cursor: pointer;
}
.plan p {
	margin: 0.3em 0;
}
.plan[data-checked=true] {
	background-color: hsl(217, 100%, 97%);
	border: 2px solid hsl(228, 100%, 84%);
}
.slider {
	display: flex;
	padding: 0.8em;
	background-color: hsl(217, 100%, 97%);
	border-radius: 5px;
	align-items: center;
	justify-content: center;
	gap: 1em;
}
.button-slide {
	display: flex;
	align-items: center;
	width: 35px;
	border-radius: 15px;
	height: 18px;
	background-color: hsl(213, 96%, 18%);
	padding: 0.15em;
	cursor: pointer;
}
.circle {
	position: relative;
	width: 15px;
	border-radius: 15px;
	height: 14px;
	padding: 0.1em;
	background-color: white;
	transition: 0.4s;
	left: 0px;
}
.yearly {
	transition: 0.4s;
	left: 14px;
}
.icon {
	width: 40px;
	margin-bottom: 2.5em;
}
.buttons {
	display: flex;
	justify-content: space-between;
}
span {
	font-weight: 400;
}
a {
	font-size: 14px;
	font-weight: 100;
	color: hsl(213, 96%, 18%);
}
a:hover {
	text-decoration: underline;
	cursor: pointer;
}
.summary {
	height: 350px;
}
.line {
	width: 100%;
	height: 1px;
	background-color: gray;
	margin: 1em 0;
}
.selected-addons {
	display: flex;
	flex-direction: column;
	gap: 0.8em;
}
.selected-addons p {
	color: hsl(231, 11%, 63%);
	display: flex;
	justify-content: space-between;
}
.selected-addons p span {
	color: hsl(213, 96%, 18%);
}
.summary-box {
	margin-top: 2em;
	margin-bottom: 1em;
	background-color: hsl(217, 100%, 97%);
	padding: 1.5em;
	border-radius: 5px;
}
.total-cost {
	display: flex;
	justify-content: space-between;
	padding: 1em;
}
.total-cost p {
	color: hsl(231, 11%, 63%);
}
.total-cost span {
	color: hsl(243, 100%, 62%);
	font-weight: 700;
}
.plan-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1em;
}
.plan-box span {
	font-weight: 700;
	color: hsl(213, 96%, 18%);
}
h1 {
	margin-bottom: 0.3em;
}
.header p {
	color: hsl(231, 11%, 63%)
}
.thank-panel {
	text-align: center;
}
.thank-panel p {
	color: hsl(231, 11%, 63%);
}
.thank-panel h1 {
	margin: 1em 0 0.5em 0;
}

.attribution {
	position: absolute;
	bottom: -15px;
	display: flex;
	justify-content: center;
	width: 100%;
}

@media only screen and (max-width: 850px) {
	:host {
		font-size: 0.7rem;
	}
@media only screen and (max-width: 700px) {
	.sidebar {
		position: relative;
		background-image: url(../../../assets/images/bg-sidebar-mobile.svg);
		min-width: 100vw;
		background-size: 100%;
		background-repeat: no-repeat;
		justify-content: center;
		flex-direction: row;
		height: 200px;
		top: 0;
		left: 0;
	}
	:host {
		flex-direction: column;
		background-color: transparent;
		padding: 0;
		height: 100%;
	}
	.main-panel {
		position: absolute;
		height: 100%;
		min-width: 100vw;
		top: 80px;
		z-index: 1;
		font-size: 0.7rem;
		padding: 1em;
	}
	.main-panel p, span {
		font-size: 0.7rem;
	}
	.buttons {
		position: absolute;
		width: 100%;
		right: 0;
		bottom: 80px;
		background-color: white;
	}
	.personal-info .buttons {
		justify-content: end;
	}
	.step {
		display: none;
	}
	.flex-box {
		background-color: white;
		padding: 3em;
		height: auto;
		border-radius: 10px;
		box-shadow: 0px 10px 15px gray;
	}
	.flex-inline {
		padding: 1em 0.5em;
		align-items: self-start;
	}
	input {
		padding: 0.7em;
		font-size: 0.7rem;
	}
	.summary {
		background-color: white;
		padding: 1em;
		border-radius: 10px;
	}
	.thank-panel {
		top: 0;
		background-color: white;
		justify-content: center;
	}
	.attribution {
		display: none;
	}
}
@media only screen and (max-width: 550px) {
	.plan-select .flex-box {
		padding: 1.5em;
	}
}
`