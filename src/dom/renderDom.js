import { renderNav } from "./nav.js";
import { renderItems } from "./items.js";
import { projects as importedProjects } from "../app_logic/logic.js";

const container = document.querySelector(".container");

export function renderDom() {
	const projects = importedProjects.projects;
	let projectNames = [];

	projects.forEach(({ projectName }) => {
		if (!projectNames.includes(projectName)) projectNames.push(projectName);
	});

	container.innerHTML = "";
	container.append(
		renderNav(projectNames),
		renderItems(projects, projectNames[0])
	);

	console.log(projects);
}
