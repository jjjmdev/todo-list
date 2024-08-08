import { format } from "date-fns";
import { fillWithDummyContent } from "./fillWithDummyContent.js";

let projects;

class Projects {
	constructor(projects = []) {
		this.projects = projects.map((project, index) => new Item(project, index));
	}

	addItem(item) {
		this.projects.push(new Item(item, projects.projects.length));

		saveToLocal();
		return this.projects;
	}

	updateItem(item, index) {
		this.projects = [
			...this.projects.slice(0, index),
			item,
			...this.projects.slice(index + 1, this.projects.length),
		];

		saveToLocal();
		return this.projects;
	}

	deleteItem(index) {
		index = parseInt(index);
		this.projects = [
			...this.projects.slice(0, index),
			...this.projects.slice(index + 1, this.projects.length),
		];
	}

	toggleCompleted(index) {
		this.projects[index].completed = !this.projects[index].completed;
		console.log(this.projects[index].completed);
	}

	listByProjectName(projectName) {
		return this.projects.filter(
			(project) => project.projectName === projectName
		);
	}

	listByPriority(priority) {
		return this.projects.filter((project) => project.priority === priority);
	}

	sortByPriority() {
		return this.projects.sort((a, b) => b.priority - a.priority);
	}
}

class Item {
	constructor(
		{ projectName, title, description, priority, completed, date },
		index
	) {
		this.projectName = projectName;
		this.title = title;
		this.description = description;
		this.priority = priority;
		this.completed = completed;
		this.id = index;
		this.date = format(new Date(date), "MM/dd/yyyy");
	}
}

function init() {
	// if (!localStorage.getItem("todo")) {
	// projects = new Projects(fillWithDummyContent());
	// localStorage.setItem("todo", JSON.stringify(projects.projects));

	// } else {
	projects = new Projects(JSON.parse(localStorage.getItem("todo")));
	// }
}

function saveToLocal() {
	localStorage.setItem("todo", JSON.stringify(projects.projects));
}

function itemByIndex(index) {
	return projects.projects.find((project) => project.id === parseInt(index));
}

function deleteItemByIndex(index) {
	projects.deleteItem(index);
	saveToLocal();
}

function toggleCompleted(index) {
	projects.toggleCompleted(index);
	saveToLocal();
	console.log(projects);
}

init();

export { projects, itemByIndex, deleteItemByIndex, toggleCompleted };
