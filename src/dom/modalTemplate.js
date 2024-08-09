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

export function modalTemplate(title, element) {
	const modalCardBody = element;

	// Modal
	const modal = createElement("div", "modal is-active");
	const modalBackground = createElement("div", "modal-background");
	const modalCard = createElement("div", "modal-card");
	const modalCardHead = createElement("header", "modal-card-head");

	const modalCardTitle = createElement("p", "modal-card-title");
	modalCardTitle.textContent = title;
	const modalCardDelete = createElement("button", "delete");

	const modalCardForm = createElement("form");

	const modalCardFooter = createElement("footer", "modal-card-foot");

	const modalFooterButtons = createElement("div", "buttons");

	const modalConfirm = createElement("input", "button is-success");
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

	return { modalCardForm, modal };
}
