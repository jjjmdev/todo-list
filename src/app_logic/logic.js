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
	constructor({ projectName, title, description, priority, notes }, index) {
		this.projectName = projectName;
		this.title = title;
		this.description = description;
		this.priority = priority;
		this.notes = notes;
		this.id = index;
	}
}

function init() {
	if (!localStorage.getItem("todo")) {
		projects = new Projects();
	} else {
		projects = new Projects(JSON.parse(localStorage.getItem("todo")));
	}

	// projects.projects.forEach((project, index) => (project.id = index));
}

function saveToLocal() {
	// projects.projects.forEach((project, index) => (project.id = index));
	localStorage.setItem("todo", JSON.stringify(projects.projects));
}

function itemByIndex(index) {
	return projects.projects.find((project) => project.id === parseInt(index));
}

function deleteItemByIndex(index) {
	projects.deleteItem(index);
	console.log(projects);
	saveToLocal();
}

init();

// projects.addItem({
// 	projectName: "bagong Item",
// 	title: "Hugas pinggan",
// 	description: "Dalawang beses mong hugasan",
// 	priority: 2,
// });

export { projects, itemByIndex, deleteItemByIndex };
