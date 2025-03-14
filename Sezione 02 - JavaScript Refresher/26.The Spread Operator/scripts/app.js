const hobbies = ['Sports', 'Cooking'];
const user = { name: 'Max', age: 30 };

const newHobbies = ['Hiking'];
const mergedHobbies = [...hobbies, ...newHobbies]; // Spread operator to merge arrays together (not to merge objects) 

console.log(mergedHobbies);


const extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser); // {isAdmin: true, name: "Max", age: 30}