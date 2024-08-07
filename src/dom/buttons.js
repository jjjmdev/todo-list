import { itemByIndex, deleteItemByIndex } from "../app_logic/logic";
import { renderDom } from "./renderDom.js";

export function buttonClick(e) {
	const classList = e.target.classList.value;
	const index = e.currentTarget.dataset.index;

	if (classList === "fa-solid fa-trash") {
		renderDeleteModal(index);
	} else if (classList === "fa-solid fa-check") {
		completeButton(index);
	} else if (classList === "fa-regular fa-pen-to-square") {
		editButton(index);
	}
}

function renderDeleteModal(index) {
	const { title } = itemByIndex(index);
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
	modalCardTitle.textContent = "Are you sure you want to delete this item?";

	const modalCardDelete = document.createElement("button");
	modalCardDelete.classList = "delete";

	const modalCardBody = document.createElement("section");
	modalCardBody.classList = "modal-card-body";

	modalCardBody.innerHTML += `
			<div class="content">
			${title}
	    </div>`;

	const modalCardFooter = document.createElement("footer");
	modalCardFooter.classList = "modal-card-foot";

	const modalFooterButtons = document.createElement("div");
	modalFooterButtons.classList = "buttons";

	const modalConfirm = document.createElement("button");
	modalConfirm.classList = "button is-success";
	modalConfirm.textContent = "Yes";

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

function completeButton(index) {
	console.log("Complete button has been toggled for index " + index);
	// toggle complete, add class complete
}

function editButton(index) {
	console.log("User wants to edit item at index " + index);
	// Modal
}
