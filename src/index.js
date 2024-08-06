import { format } from "date-fns";
import "./completed.js";
import "./domModules.js";
import "./script.js";
import "./style.css";
console.log("Hello");
console.log(format(new Date(2024, 1, 11), "MM/dd/yyyy"));

// localStorage.setItem(
// 	"todo",
// 	JSON.stringify([
// 		{
// 			projectName: "daily",
// 			title: "Hugas pinggan",
// 			description: "Dalawang beses mong hugasan",
// 			priority: 3,
// 		},

// 		{
// 			projectName: "weekly",
// 			title: "Hugas pinggan",
// 			description: "Dalawang beses mong hugasan",
// 			priority: 2,
// 		},

// 		{
// 			projectName: "luhluh",
// 			title: "Hugas pinggan",
// 			description: "Dalawang beses mong hugasan",
// 			priority: 1,
// 		},
// 	])
// );
