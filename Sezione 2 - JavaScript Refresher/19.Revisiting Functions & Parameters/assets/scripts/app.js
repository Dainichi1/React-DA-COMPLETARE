function greet() {
    console.log('Hi there!');
}
greet(); // Hi there!



function greetUser(userName, message) {
    console.log(userName);
    console.log(message);
}
greetUser('Max', 'Welcome!');
greetUser('Anna', 'Hi there!');


function greetUserTwo(userName, message ="Hello") {
    console.log(userName);
    console.log(message);
}
greetUserTwo('Max');
greetUserTwo('Anna', 'Hi there!');


function greetUserThree(userName, message ="Hello") {
    return "Hi, I am "+userName + ' .' + message;
}
console.log(greetUserThree('Marco'));
console.log(greetUserThree('Luigi', 'Hi there!'));