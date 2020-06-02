
/*
    A function that given a string varies its output based on two helper functions that either
    1: splits a given string on the character 'c' into an array
    2: for any lower case 'a' in a string it is replaced 'A'
    based on which function is called the main function should produce the matching result
 */

const splits_at_c = (str) => str.replace(/c/g, '!c').split('!');

const useUpper_A = (str) => {
    return {originalString: str, modifiedString: str.replace(/a/g, 'A'), numberReplaced: (str.split('a').length - 1), length: str.length};
};

const executeFunc = (str, func) => {
    if (typeof str === 'string' && typeof(func) === 'function') {
        return func(str);
    } else {
        return "Not a valid input";
    }
};

console.log('Test on splits_at_c:\n', executeFunc('supercalifragilisticexpialidocious', splits_at_c));
console.log('Test on useUpper_A: \n', executeFunc('supercalifragilisticexpialidocious', useUpper_A));
console.log('Test on useUpper_A: \n', executeFunc(4, useUpper_A));

module.exports = {executeFunc};