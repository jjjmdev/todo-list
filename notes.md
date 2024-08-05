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
		date: Ngayong araw,
		priority: 1, 2, 3,
	},
]

<!-- I think `priority` property should be a number. -->
<!-- Can also add `notes` property -->
<!-- Multiple projects and to-do item goes into the selected project -->
Application logic is separate from DOM-related stuff
Bulma for UI
    View all projects.
    View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
    Expand a single todo to see/edit its details.
    Delete a todo.
Add a `date` using date-fns
<!-- Saving data using localStorage -->
<!-- Function that checks localStorage during init -->
<!-- Inspect data of localStorage using DevTools -->
<!-- use JSON -->

