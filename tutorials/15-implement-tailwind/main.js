import "./index.css";
import { makeButton } from "./button.js";

import capitalize from "capitalize";

makeButton();

const text = capitalize("fred");

console.log(text);
