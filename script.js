let projects;

class Projects {
	constructor(projects = []) {
		this.projects = projects.map((project) => new Item(project));
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

	projects.projects.forEach((project, index) => (project.id = index));
	console.log(projects);
}

function saveToLocal() {
	localStorage.setItem("todo", JSON.stringify(projects.projects));
}

init();

projects.addItem({
	projectName: "bagong Item",
	title: "Hugas pinggan",
	description: "Dalawang beses mong hugasan",
	priority: 2,
});

export { projects };
