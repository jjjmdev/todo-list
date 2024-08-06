export function renderNav(projectNames) {
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

	return nav;
}
