import { buttonClick } from "./buttons.js";
import { isPast } from "date-fns";

export function renderItems(projects, selectedProject) {
	const items = projects.filter(
		({ projectName }) => projectName === selectedProject
	);

	const cards = document.createElement("div");

	items.forEach(({ title, description, priority, id, date, completed }) => {
		const article = document.createElement("article");
		article.classList = "message";

		if (completed) {
			article.classList += " is-success";
		} else if (!completed && isPast(date)) {
			article.classList += " is-danger";
		}

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
		deadlineSpan.textContent = `Deadline: ${date}`;

		const doneButton = document.createElement("button");
		doneButton.classList = "fa-solid fa-check";

		messageTitle.append(titleSpan, prioritySpan, deadlineSpan);

		const messageExtras = document.createElement("span");
		messageExtras.setAttribute("data-index", id);
		messageExtras.classList = "message-extras";
		messageExtras.addEventListener("click", (e) => buttonClick(e));

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

	return cards;
}
