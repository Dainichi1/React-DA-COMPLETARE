// import { apiKey } from "./util.js";

// console.log(apiKey);


/*
oppure 
import apiKey from "./util.js";  --> se utilizzo export default
import * as bundled from "./util.js";  --> se utilizzo export let apiKey
console.log(bundled.apiKey);

oppure
import { apiKey as key, url } from "./util.js";

oppure
import { apiKey as key, url, getDomain } from "./util.js";S

*/

const userMessage2 = "Hello world!!!!"; // non si può riusare la variabile

let userMessage = "Hello world!!!!"; // si può riusare la variabile

console.log(userMessage);

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);    
console.log(10 / 5);
console.log(10 % 5);
console.log("hello"+"world");
console.log(10 + "5");
console.log("10" + 5);
console.log(10 === 10);
console.log(10 == 10);

if (10 === 10) {
    console.log("works");
}
