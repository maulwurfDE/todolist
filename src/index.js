import { render, hide } from "./projectListViewer.js";
import { format, compareAsc } from "date-fns";

require("file-loader?name=[name].[ext]!./index.html");
require("file-loader?name=[name].[ext]!./style.css");

render();

console.log(format(new Date(2014, 1, 11), "MM/dd/yyyy"));
//=> '02/11/2014'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
console.log(dates.sort(compareAsc));
