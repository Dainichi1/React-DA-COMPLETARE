const userNameData = ['Max', 'Schwarz'];
const firstNameOne = userNameData[0];
const lastNameOne = userNameData[1];

const [firstNameTwo, lastNameTwo] = ['Max', 'Schwarz'];
console.log(firstNameTwo, lastNameTwo); // Max Schwarz

const {userName, age} = {
    userName: 'Max',
    age: 30 
}
console.log(userName, age); // Max 30