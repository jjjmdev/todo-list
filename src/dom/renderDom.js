import { renderNav } from "./nav.js";
import { renderItems } from "./items.js";
import { projects as importedProjects } from "../app_logic/logic.js";

const projects = importedProjects.projects;
const container = document.querySelector(".container");

export function renderDom() {
	let projectNames = [];

	projects.forEach(({ projectName }) => {
		if (!projectNames.includes(projectName)) projectNames.push(projectName);
	});

	container.append(
		renderNav(projectNames),
		renderItems(projects, projectNames[1])
	);
}
