import { format } from "date-fns";
import { renderDom } from "./dom/renderDom.js";
import "./style.css";

console.log("Hello");
console.log(format(new Date(2024, 1, 11), "MM/dd/yyyy"));

function init() {
	renderDom();
}

init();
