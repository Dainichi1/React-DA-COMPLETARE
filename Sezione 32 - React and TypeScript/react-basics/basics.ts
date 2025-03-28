let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

//////////////////////////////

let hobbies: string[]
hobbies = ["Sport", "Cooking"];

type Person = {
    name: string;
    age: number;
}


let person: Person;

person = {
    name: "Max",
    age: 32
}

let people: Person[];

/////////////////////UNION TYPE/////////////////////

let course: string | number = "REACT";
course = 123;

//////////////////FUNCTIONS & TYPES////////////////

function add(a: number,b: number) {
    return a+b;
}

function printOutput(value: any) {
    console.log(value);
}

/////////////////////GENERICS///////////////

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a","b","c"],"d");

