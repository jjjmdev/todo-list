import { renderItems } from "./items.js";
let activeProject;

export function renderNav(projectNames) {
	const nav = document.createElement("div");
	nav.classList = "tabs is-right";
	const projectList = document.createElement("ul");

	for (let [index, projectName] of projectNames.entries()) {
		const projectItem = document.createElement("li");
		projectItem.innerHTML = `<a>${projectName}</a>`;

		if (!activeProject) {
			activeProject = projectName;
		}

		if (activeProject === projectName) {
			projectItem.classList += "is-active";
		}

		renderItems(activeProject);

		projectItem.addEventListener("click", function () {
			document
				.querySelectorAll(".is-active")
				.forEach((item) => item.classList.remove("is-active"));

			projectItem.classList += "is-active";
			activeProject = projectName;
			renderItems(activeProject);
		});

		projectList.append(projectItem);
	}

	// add button
	const addButton = document.createElement("li");
	addButton.innerHTML = `<a>+</a>`;
	projectList.appendChild(addButton);

	nav.appendChild(projectList);

	return nav;
}
