/* Write a function that takes as input each of the following strings in turn: ‘4+2’,  ‘5*7’ , ‘6-1’, ‘9/2’
This function should determine the operator (+, *, -, or /) embedded in the string
Return a function to implement the input operator that returns the result
For example, if the input string is ‘8%3’, return (left, right) => left % right */

const evaluate = expression => {
    if (typeof expression === 'string' && expression.length == 3) {
        let operator = expression.charAt(1);
        switch (operator) {
            case '*':
                return (left, right) => Number(left) * Number(right)
                break;
            case '/':
                return (left, right) => Number(left) / Number(right);
                break;
            case '+':
                return (left, right) => Number(left) + Number(right);
                break;
            case '-':
                return (left, right) => Number(left) - Number(right);
                break;
            case '%':
                return (left, right) => Number(left) % Number(right);
                break;
        }
    } else {
        return "Not a valid input";
    }

}

console.log("Test on expressions without inputs, should return the actual function");

const expression1 = '4+2';
let operator1= evaluate(expression1);
console.log(`${expression1} = ${operator1}`)

const expression2 = '5*7';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2}`)

const expression3 = '6-1';
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3}`)

const expression4 = '9/2';
let operator4 = evaluate(expression4);
console.log(`${expression4} = ${operator4}`)

const expression5 = '8%3';
let operator5 = evaluate(expression5);
console.log(`${expression5} = ${operator5}`)

console.log("Test on expressions with inputs, should return the actual values");
console.log(`${expression1} = ${evaluate(expression1)(expression1.charAt(0), expression1.charAt(2)) }`);
console.log(`${expression2} = ${evaluate(expression2)(expression2.charAt(0), expression2.charAt(2)) }`);
console.log(`${expression3} = ${evaluate(expression3)(expression3.charAt(0), expression3.charAt(2)) }`);
console.log(`${expression4} = ${evaluate(expression4)(expression4.charAt(0), expression4.charAt(2)) }`);
console.log(`${expression5} = ${evaluate(expression5)(expression5.charAt(0), expression5.charAt(2)) }`);

module.exports = {evaluate};