import { webpage, html } from "@benev/turtle";

export default webpage(async ({ v }) => html`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->
	<script type="importmap-shim" src="${v("/importmap.json")}"></script>
	<script type="module-shim" src="${v("/main.bundle.js")}"></script>
	<script defer src="${v("/node_modules/es-module-shims/dist/es-module-shims.js")}"></script>
	<link rel="preconnect" href="${v("https://fonts.googleapis.com")}">
	<link rel="preconnect" href="${v("https://fonts.gstatic.com")}" crossorigin>
	<link href="${v("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap")}" rel="stylesheet">
	<style>
		html {
			display: flex; 
			background-color: hsl(217, 100%, 97%); 
			align-items: center; 
			justify-content: center; 
			height: 100%;
			margin: 0;
			padding: 0;
		}
		@media only screen and (max-width: 700px) {
			html {
				align-items: unset; 
			}
		}
		body {
			margin: 0;
			padding: 0;
		}
	</style>
	<title>Frontend Mentor | Multi-step form</title>
</head>
<body>
	<info-panel></info-panel>
</body>
</html>
`)
