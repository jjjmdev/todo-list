To-Do List
Project, (CRUD)
	- Item (CRUD)
		- Date (can sort by)
		- Status (can sort by)

Projects = [
	{
		projectName: "daily",
		title: Hugas pinggan,
		description: Dalawang beses mong hugasan,
		date: 2024-05-30,
		status: completed, not completed, overdue // success, normal, danger
		priority: 1, 2, 3,
	},
]

Application logic is separate from DOM-related stuff
    View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
    Expand a single todo to see/edit its details.
    Delete a todo.
Add a `date` using date-fns
Completed: Boolean, true or false
Pag completed, lower opacity