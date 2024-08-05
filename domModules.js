import { projects as importedProjects } from "./script.js";
const projects = importedProjects.projects;
const container = document.querySelector(".container");

function renderNav(projectNames) {
	const nav = document.createElement("div");
	nav.classList = "tabs is-right";
	const projectList = document.createElement("ul");

	for (const projectName of projectNames) {
		const projectItem = document.createElement("li");
		projectItem.innerHTML = `<a>${projectName}</a>`;
		projectList.appendChild(projectItem);
	}

	// add button
	const addButton = document.createElement("li");
	addButton.innerHTML = `<a>+</a>`;
	projectList.appendChild(addButton);

	nav.appendChild(projectList);

	container.appendChild(nav);
}

function renderItems(selectedProject) {
	const items = projects.filter(
		({ projectName }) => projectName === selectedProject
	);

	const cards = document.createElement("div");

	items.forEach(({ title, description, priority }) => {
		cards.innerHTML += `
		<article class="message">
			<div class="message-header">
				<span class="message-title">
				<span>${title}</span>
				${
					priority === 1
						? `<span class="tag is-primary">Low Priority</span>`
						: priority === 2
						? `<span class="tag is-warning">Medium Priority</span>`
						: `<span class="tag is-danger">High Priority</span>`
				}
				</span>
				<span class="message-extras">
					<button class="fa-solid fa-check" aria-label="done"></button>
					<button class="fa-solid fa-trash" aria-label="delete"></button>
					<button
						class="fa-regular fa-pen-to-square"
						aria-label="edit"
					></button>
				</span>
			</div>
			<div class="message-body">${description}</div>
		</article>`;
	});

	container.appendChild(cards);
}

function init() {
	let projectNames = [];

	projects.forEach(({ projectName }) => {
		if (!projectNames.includes(projectName)) projectNames.push(projectName);
	});

	renderNav(projectNames);
	renderItems(projectNames[3]);
}

init();
