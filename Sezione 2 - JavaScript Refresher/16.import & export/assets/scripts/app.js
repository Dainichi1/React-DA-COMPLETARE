import { apiKey } from "./util.js";

console.log(apiKey);


/*
oppure 
import apiKey from "./util.js";  --> se utilizzo export default
import * as bundled from "./util.js";  --> se utilizzo export let apiKey
console.log(bundled.apiKey);

oppure
import { apiKey as key, url } from "./util.js";

oppure
import { apiKey as key, url, getDomain } from "./util.js";

*/