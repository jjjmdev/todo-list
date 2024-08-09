import { itemByIndex } from "../app_logic/logic.js";
import { format } from "date-fns";
import "bulma-switch";

function createLabel(text, forAttribute) {
	const label = document.createElement("label");
	label.classList.add("label");
	label.setAttribute("for", forAttribute);
	label.textContent = text;

	return label;
}

function createControl() {
	const control = document.createElement("div");
	control.classList = "control";

	return control;
}

function createFieldLabelControl(text, name) {
	const field = createElement("div", "field");
	const label = createLabel(text, name);
	const control = createControl();

	return { field, label, control };
}

function createInput(text, name, value, type, placeholder = "") {
	const { field, label, control } = createFieldLabelControl(text, name);

	const textInput = document.createElement("input");
	textInput.classList = "input";
	textInput.setAttribute("type", type);
	textInput.setAttribute("id", name);
	textInput.setAttribute("name", name);
	textInput.setAttribute("value", value);
	textInput.setAttribute("placeholder", placeholder);

	control.append(label, textInput);
	field.append(control);
	return field;
}

function createSwitch(text, name, checked) {
	const { field, label, control } = createFieldLabelControl(text, name);

	const textInput = document.createElement("input");
	textInput.classList = "switch";
	textInput.setAttribute("type", "checkbox");
	textInput.setAttribute("id", name);
	textInput.setAttribute("name", name);

	if (checked) {
		textInput.setAttribute("checked", "checked");
	}

	control.append(textInput, label);
	field.append(control);
	return field;
}

function createElement(type, classList = "") {
	const el = document.createElement(type);
	el.classList = classList;

	return el;
}

function createSelect(selected, title, name, options) {
	const { field, label, control } = createFieldLabelControl(title, name);
	const selectContainer = createElement("div", "select");
	const select = createElement("select");
	select.setAttribute("id", name);
	select.setAttribute("name", name);

	select.append(
		...options.map(({ value, text }) => {
			const el = document.createElement("option");
			el.setAttribute("value", value);
			el.textContent = text;

			if (value === selected) {
				el.setAttribute("selected", "selected");
			}

			return el;
		})
	);
	selectContainer.append(select);
	control.append(label, selectContainer);
	field.append(control);
	return field;
}

function createTextarea(text, name, value, placeholder) {
	const { field, label, control } = createFieldLabelControl(text, name);
	const textarea = createElement("textarea", "textarea");
	textarea.setAttribute("placeholder", placeholder);
	textarea.setAttribute("id", name);
	textarea.setAttribute("name", name);
	textarea.textContent = value;

	control.append(label, textarea);
	field.append(control);

	return field;
}

export function renderEditModal(index) {
	const { projectName, title, description, priority, completed, date, id } =
		itemByIndex(index);

	// Modal

	const modal = createElement("div", "modal is-active");
	const modalBackground = createElement("div", "modal-background");
	const modalCard = createElement("div", "modal-card");
	const modalCardHead = createElement("header", "modal-card-head");

	const modalCardTitle = createElement("p", "modal-card-title");
	modalCardTitle.textContent = "Edit an item";
	const modalCardDelete = createElement("button", "delete");

	const modalCardForm = createElement("form");
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

	const modalCardFooter = document.createElement("footer");
	modalCardFooter.classList = "modal-card-foot";

	const modalFooterButtons = document.createElement("div");
	modalFooterButtons.classList = "buttons";

	const modalConfirm = document.createElement("input");
	modalConfirm.classList = "button is-success";
	modalConfirm.setAttribute("type", "submit");
	modalConfirm.setAttribute("value", "Apply Changes");

	const modalCancel = document.createElement("button");
	modalCancel.classList = "button";
	modalCancel.textContent = "Cancel";

	modalFooterButtons.append(modalConfirm, modalCancel);
	modalCardFooter.append(modalFooterButtons);

	modalCardHead.append(modalCardTitle, modalCardDelete);
	modalCardForm.append(modalCardBody, modalCardFooter);
	modalCard.append(modalCardHead, modalCardForm);
	modal.append(modalBackground, modalCard);

	document.body.append(modal);

	[modalBackground, modalCardDelete, modalCancel].forEach(function (element) {
		element.addEventListener("click", function () {
			modal.remove();
		});
	});

	modalCardForm.addEventListener("submit", function (e) {
		// call pang edit
		e.preventDefault();

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		console.log(formProps);
	});
}
