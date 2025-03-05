
const possibility = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] //Letters of alphabet. Will be referenced using list indices
let password = [] //Initialize empty list
let counter = 0

const generateBtn = document.getElementById('generateButton') //Locates button element and awaits user click


generateBtn.onclick = () => { //Function only ran on button click
for (var char = 1; char<24; char++){ //For loop to begin at 1 and run 23 times
    if ((char % 6 === 0)) {
    password.push('-')
}
    else {
    let randomSelector = Math.random(); // Generator a random number between 0 and 1. This variable will correspond to the letter chosen
    let isCapitalized = Math.random(); // Generate a random number between 0 and 1. This variable will be responsible for determining if the character is capitalized or not
    isCapitalized = Math.round(isCapitalized) //Rounds the variable to be either 0 (uncapitalized) or 1 (capitalized)
    randomSelector = Math.floor(randomSelector * 26) //Multiplying by 26 and flooring the result will allow all letters in the list to be possible values
    character = possibility[randomSelector] //Position of character in list
    if (isCapitalized === 1) { //Validates capitalization
    upperCharacter = possibility[randomSelector].toUpperCase() //Converts if value is 1 for variable
    password.push(upperCharacter) //Appends value to password list
    
    }
    else {
        password.push(character) //Appends uncapitalized value to password list
    }
}
    
}
password = password.join('') //Combines all list elements together into one singular string(parameter removes commas)
displayedPass = document.getElementById('generatedPass') //Stores the location of the element where the password will be outputted
displayedPass.textContent = password //Replaces content of placeholder element with password
password = [] //Resets the password if the individual wishes to generate a new password
totalGenerated = document.getElementById('totalGenerated')
counter++
if (counter <= 1) {
totalGenerated.textContent = `You've generated ${counter} password. Thanks for using!`
}
else {
    totalGenerated.textContent = `You've generated ${counter} passwords. Thanks for using!`
}
}


