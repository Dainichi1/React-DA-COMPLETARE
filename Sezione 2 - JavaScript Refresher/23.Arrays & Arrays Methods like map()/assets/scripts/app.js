const hobbies = ['Sports', 'Cooking', 'Reading'];
console.log(hobbies[1]); // Cooking

hobbies.push('Programming');
console.log(hobbies); // ['Sports', 'Cooking', 'Reading', 'Programming']

const index = hobbies.findIndex((item) => {
    return item === 'Sports'; // Sports, Cooking, Reading, Programming
})

console.log(index); // 0


const editedHobbies = hobbies.map((item) => item + "!"); // Sports, Cooking, Reading, Programming
console.log(editedHobbies); // ['Sports', 'Cooking', 'Reading', 'Programming']

const editedHobbiesTwo = hobbies.map((item) => ({
    description : item
})); 
console.log(editedHobbiesTwo); // [{text: 'Sports'}, {text: 'Cooking'}, {text: 'Reading'}, {text: 'Programming'}]