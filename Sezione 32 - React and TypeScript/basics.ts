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
