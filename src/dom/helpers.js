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

export {
	createLabel,
	createControl,
	createFieldLabelControl,
	createInput,
	createSwitch,
	createElement,
	createSelect,
	createTextarea,
};
