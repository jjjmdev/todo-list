class Projects {
	constructor(projects = []) {
		this.projects = projects.map((project) => new Item(project));
	}

	addItem(item) {
		this.projects.push(new Item(item));

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
	constructor({ projectName, title, description, priority, notes }) {
		this.projectName = projectName;
		this.title = title;
		this.description = description;
		this.priority = priority;
		this.notes = notes;
	}

	hello() {
		return;
	}
}

let projects;
function init() {
	if (!localStorage.getItem("todo")) {
		projects = new Projects();
	} else {
		projects = new Projects(JSON.parse(localStorage.getItem("todo")));
	}

	console.log(projects);
}

function saveToLocal() {
	localStorage.setItem("todo", JSON.stringify(projects.projects));
}

init();

// localStorage.setItem(
// 	"todo",
// 	JSON.stringify([
// 		{
// 			projectName: "daily",
// 			title: "Hugas pinggan",
// 			description: "Dalawang beses mong hugasan",
// 			priority: 3,
// 			notes: "huy galingan mo ",
// 		},

// 		{
// 			projectName: "weekly",
// 			title: "Hugas pinggan",
// 			description: "Dalawang beses mong hugasan",
// 			priority: 2,
// 			notes: "huy galingan mo ",
// 		},

// 		{
// 			projectName: "luhluh",
// 			title: "Hugas pinggan",
// 			description: "Dalawang beses mong hugasan",
// 			priority: 1,
// 			notes: "huy galingan mo ",
// 		},
// 	])
// );

// projects.addItem(
// 	{
// 		projectName: "bagong Item",
// 		title: "Hugas pinggan",
// 		description: "Dalawang beses mong hugasan",
// 		priority: 2,
// 		notes: "huy galingan mo ",
// 	},
// 	1
// );
