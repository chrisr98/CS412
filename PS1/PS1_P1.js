/*Write a function that takes a string as its input and returns a new string
that contains all of the letters in the original string, but in alphabetical order.
Ignore punctuation and numbers.constructor
Test your function using the string ‘supercalifragilisticexpialidocious’.*/

const alphabetOrder = (str) => {
    if (typeof str === 'string') {
        return str.replace(/[.!?\\-]/g, '').replace(/[0-9]/g, '').split('').sort().join('');
    } else {
        return "Not a valid input";
    }

}

console.log('Test on: supercalifragilisticexpialidocious', '\n', alphabetOrder('supercalifragilisticexpialidocious'));
console.log('Test on: thequickbrownfoxjumpedoverthelazydog', '\n', alphabetOrder('thequickbrownfoxjumpedoverthelazydog'));
console.log('Test on: thequickbrownfoxjumpedoverthelazydog', '\n', alphabetOrder(42));

module.exports = {alphabetOrder};