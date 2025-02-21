const user = {
    name: 'Max',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name);
        console.log(this.age);    
    }
};




console.log(user.age); // 30
user.greet(); // Hi, I am Max


////////////////////////////////////////

class User {
    name = 'Max';

    constructor() {
        this.age = 30;
    }

    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const userTwo = new User();
userTwo.greet(); // Hi, I am Max