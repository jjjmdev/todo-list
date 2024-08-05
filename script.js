class Projects {
	constructor(projects = []) {
		this.projects = projects.map(({ name, list }) => new Project(name, list));
	}

	newProject(name) {
		let p = new Project(name);
		this.projects.push(p);
		return p;
	}

	get listProjects() {
		return this.projects;
	}
}

class Project {
	constructor(name, list = []) {
		if (!name) {
			return {};
		}
		this.name = name;
		this.list = list.map(
			({ title, description, priority }) =>
				new Item(title, description, priority)
		);
	}

	listDown() {
		return this.list;
	}

	addItem(item) {
		this.list = [...this.list, item];
		return this.list;
	}

	updateItem(item, index) {
		this.list = [
			...this.list.slice(0, index),
			item,
			...this.list.slice(index + 1, this.list.length),
		];
		return this.list;
	}

	deleteItem(index) {
		this.list = [
			...this.list.slice(0, index),
			...this.list.slice(index + 1, this.list.length),
		];
	}
}

class Item {
	constructor(title, description, priority) {
		this.title = title;
		this.description = description;
		this.priority = priority;
	}
}

// const projects = new Projects();
// const daily = projects.newProject("daily");
// projects.newProject("weeklys");

// daily.addItem(new Item("gardening1", "tend to garden", "medium"));
// daily.addItem(new Item("gardening2", "tend to garden", "medium"));
// daily.addItem(new Item("gardening3", "tend to garden", "medium"));

// console.log(daily.listDown());

// daily.deleteItem(0);

// console.log(daily.listDown());
// console.log(projects.listDown());

// const jsonString = JSON.stringify(projects.listDown());
// console.log(jsonString);

// localStorage.setItem("todo", jsonString);
let itemFromLocalStorage = localStorage.getItem("todo");
itemFromLocalStorage = new Projects(JSON.parse(itemFromLocalStorage));
console.log(itemFromLocalStorage.listProjects);
