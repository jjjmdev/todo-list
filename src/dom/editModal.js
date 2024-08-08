import { itemByIndex } from "../app_logic/logic.js";
import { format } from "date-fns";
import "bulma-switch";

export function renderEditModal(index) {
	const { projectName, title, description, priority, completed, date, id } =
		itemByIndex(index);

	// Modal

	const modal = document.createElement("div");
	modal.classList = "modal is-active";

	const modalBackground = document.createElement("div");
	modalBackground.classList = "modal-background";

	const modalCard = document.createElement("div");
	modalCard.classList = "modal-card";

	const modalCardHead = document.createElement("header");
	modalCardHead.classList = "modal-card-head";

	const modalCardTitle = document.createElement("p");
	modalCardTitle.classList = "modal-card-title";
	modalCardTitle.textContent = "Edit an item";

	const modalCardDelete = document.createElement("button");
	modalCardDelete.classList = "delete";

	const modalCardBody = document.createElement("section");
	modalCardBody.classList = "modal-card-body";

	const projectNameField = document.createElement("div");
	projectNameField.classList.add("field");

	const projectNameLabel = document.createElement("label");
	projectNameLabel.classList.add("label");
	projectNameLabel.textContent = "Project Name";

	const projectNameControl = document.createElement("div");
	projectNameControl.classList.add("control");

	const projectNameInput = document.createElement("input");
	projectNameInput.classList.add("input");
	projectNameInput.setAttribute("type", "text");
	projectNameInput.setAttribute("placeholder", "Enter project name");
	projectNameInput.setAttribute("value", projectName);

	projectNameControl.appendChild(projectNameInput);
	projectNameField.append(projectNameLabel, projectNameControl);

	const taskField = document.createElement("div");
	taskField.classList.add("field");

	const taskLabel = document.createElement("label");
	taskLabel.classList.add("label");
	taskLabel.textContent = "Task";

	const taskControl = document.createElement("div");
	taskControl.classList.add("control");

	const taskInput = document.createElement("input");
	taskInput.classList.add("input");
	taskInput.setAttribute("type", "text");
	taskInput.setAttribute("placeholder", "Enter task name");
	taskInput.setAttribute("value", title);

	taskControl.appendChild(taskInput);
	taskField.append(taskLabel, taskControl);

	const deadlineField = document.createElement("div");
	deadlineField.classList = "field cell";

	const deadlineLabel = document.createElement("label");
	deadlineLabel.classList.add("label");
	deadlineLabel.textContent = "Deadline";

	const deadlineControl = document.createElement("div");
	deadlineControl.classList.add("control");

	const deadlineInput = document.createElement("input");
	deadlineInput.classList.add("input");
	deadlineInput.setAttribute("type", "date");
	deadlineInput.setAttribute("value", format(new Date(date), "yyyy-MM-dd"));

	deadlineControl.appendChild(deadlineInput);
	deadlineField.append(deadlineLabel, deadlineControl);

	const completedField = document.createElement("div");
	completedField.classList = "field cell";

	const completedLabel = document.createElement("label");
	completedLabel.classList.add("label");
	completedLabel.setAttribute("for", "completedSwitch");
	completedLabel.textContent = "Completed?";

	const completedControl = document.createElement("div");
	completedControl.classList.add("control");

	const completedInput = document.createElement("input");
	completedInput.classList = "switch";
	completedInput.setAttribute("type", "checkbox");
	completedInput.setAttribute("id", "completedSwitch");
	completedInput.setAttribute("name", "completedSwitch");
	completedInput.setAttribute("checked", "checked");

	completedControl.append(completedInput, completedLabel);
	completedField.append(completedControl);

	const priorityField = document.createElement("div");
	priorityField.classList = "field cell";

	const priorityLabel = document.createElement("label");
	priorityLabel.classList.add("label");
	priorityLabel.textContent = "Priority";

	const priorityControl = document.createElement("div");
	priorityControl.classList.add("control");

	const prioritySelectContainer = document.createElement("div");
	prioritySelectContainer.classList.add("select");

	const prioritySelect = document.createElement("select");

	const lowPriorityOption = document.createElement("option");
	lowPriorityOption.textContent = "Low";

	const mediumPriorityOption = document.createElement("option");
	mediumPriorityOption.textContent = "Medium";

	const highPriorityOption = document.createElement("option");
	highPriorityOption.textContent = "High";

	if (priority === 1) {
		lowPriorityOption.setAttribute("selected", "selected");
	} else if (priority === 2) {
		mediumPriorityOption.setAttribute("selected", "selected");
	} else {
		highPriorityOption.setAttribute("selected", "selected");
	}

	prioritySelect.append(
		lowPriorityOption,
		mediumPriorityOption,
		highPriorityOption
	);

	prioritySelectContainer.appendChild(prioritySelect);
	priorityControl.appendChild(prioritySelectContainer);
	priorityField.append(priorityLabel, priorityControl);

	const formGrid = document.createElement("div");
	formGrid.classList = "grid";
	formGrid.append(deadlineField, priorityField, completedField);
	modalCardBody.append(projectNameField, taskField, formGrid);

	const modalCardFooter = document.createElement("footer");
	modalCardFooter.classList = "modal-card-foot";

	const modalFooterButtons = document.createElement("div");
	modalFooterButtons.classList = "buttons";

	const modalConfirm = document.createElement("button");
	modalConfirm.classList = "button is-success";
	modalConfirm.textContent = "Apply Changes";

	const modalCancel = document.createElement("button");
	modalCancel.classList = "button";
	modalCancel.textContent = "Cancel";

	modalFooterButtons.append(modalConfirm, modalCancel);
	modalCardFooter.append(modalFooterButtons);

	modalCardHead.append(modalCardTitle, modalCardDelete);
	modalCard.append(modalCardHead, modalCardBody, modalCardFooter);
	modal.append(modalBackground, modalCard);
	document.body.append(modal);

	[modalBackground, modalCardDelete, modalCancel].forEach(function (element) {
		element.addEventListener("click", function () {
			modal.remove();
		});
	});

	modalConfirm.addEventListener("click", function () {
		// call pang delete
		deleteItemByIndex(index);
		modal.remove();
		renderDom();
	});
}
