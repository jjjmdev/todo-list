import { projects as importedProjects } from "./script.js";
import { toggleCompleted } from "./completed.js";
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

	items.forEach(({ title, description, priority, id }) => {
		const article = document.createElement("article");
		article.classList = "message";

		const messageHeader = document.createElement("div");
		messageHeader.classList = "message-header";

		const messageTitle = document.createElement("span");
		messageTitle.classList = "message-title";

		const titleSpan = document.createElement("span");
		titleSpan.textContent = title;

		const prioritySpan = document.createElement("span");
		prioritySpan.classList = "tag";

		if (priority === 3) {
			prioritySpan.classList += " is-danger";
			prioritySpan.textContent = "High";
		} else if (priority === 2) {
			prioritySpan.classList += " is-warning";
			prioritySpan.textContent = "Medium";
		} else {
			prioritySpan.classList += " is-primary";
			prioritySpan.textContent = "Low";
		}

		// Deadline
		const deadlineSpan = document.createElement("span");
		deadlineSpan.classList = "tag is-white";
		deadlineSpan.textContent = "Deadline: 2024-03-20";

		const doneButton = document.createElement("button");
		doneButton.classList = "fa-solid fa-check";

		messageTitle.append(titleSpan, prioritySpan, deadlineSpan);

		const messageExtras = document.createElement("span");
		messageExtras.setAttribute("data-index", id);
		messageExtras.classList = "message-extras";
		messageExtras.addEventListener("click", (e) =>
			console.log(e.currentTarget.dataset.index)
		);

		const completedButton = document.createElement("button");
		completedButton.classList = "fa-solid fa-check";

		const deleteButton = document.createElement("button");
		deleteButton.classList = "fa-solid fa-trash";

		const editButton = document.createElement("button");
		editButton.classList = "fa-regular fa-pen-to-square";

		messageExtras.append(completedButton, deleteButton, editButton);
		messageHeader.append(messageTitle, messageExtras);

		const messageBody = document.createElement("div");
		messageBody.classList = "message-body";
		messageBody.textContent = description;

		article.append(messageHeader, messageBody);
		cards.appendChild(article);
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
