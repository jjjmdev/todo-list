import { itemByIndex, updateItem } from "../app_logic/logic.js";
import {
	createLabel,
	createControl,
	createFieldLabelControl,
	createInput,
	createSwitch,
	createElement,
	createSelect,
	createTextarea,
} from "./helpers.js";
import { modalTemplate } from "./modalTemplate.js";
import { renderDom } from "./renderDom.js";
import { format } from "date-fns";
import "bulma-switch";

export function renderEditModal(index) {
	const { projectName, title, description, priority, completed, date, id } =
		itemByIndex(index);

	// Modal
	const modalCardBody = createElement("section", "modal-card-body");

	// Project Name
	const projectNameField = createInput(
		"Project Name",
		"projectName",
		projectName,
		"text",
		"Enter project name"
	);

	const taskField = createInput(
		"Task",
		"title",
		title,
		"text",
		"Enter task name"
	);

	const deadlineField = createInput(
		"Deadline",
		"date",
		format(new Date(date), "yyyy-MM-dd"),
		"date"
	);

	const priorityField = createSelect(priority, "Priority", "priority", [
		{ value: 1, text: "Low" },
		{ value: 2, text: "Medium" },
		{ value: 3, text: "High" },
	]);

	const completedField = createSwitch(
		"Completed?",
		"completedSwitch",
		completed
	);

	const formGrid = createElement("div", "grid");
	formGrid.append(deadlineField, priorityField, completedField);

	const descriptionField = createTextarea(
		"Description",
		"description",
		description,
		"Please enter a description"
	);

	modalCardBody.append(projectNameField, taskField, formGrid, descriptionField);

	const { modalCardForm, modal } = modalTemplate(
		"Edit this item",
		modalCardBody
	);

	modalCardForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		if (formProps.completedSwitch === "on") {
			formProps.completed = true;
			delete formProps.completedSwitch;
		} else {
			formProps.completed = false;
		}
		formProps.id = id;
		updateItem(formProps);
		modal.remove();
		renderDom();
	});
}
