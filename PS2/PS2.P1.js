//Fat arrow not allowed inside generators
//Just standard notations

/*Write two generators that together implement a series of even Fibonacci numbers.
The first generator should return the series of fibonacci numbers starting from 0.
The series F is defined as F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
The second generator should use the first to obtain the next number in the sequence,
rejecting it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
Use the generators to print out the first 6 even Fibonacci numbers.*/

function* fibonacci() {
    let first_Val = 0;
    let second_Val = 1;
    while (first_Val <= Number.MAX_VALUE) { //Limit the max number so it doesn't print infinity
        yield first_Val;
        [first_Val, second_Val] = [second_Val, first_Val + second_Val];
    }
}
function* get_Even() {
    let fib_Sequence = fibonacci();
    let num = fib_Sequence.next().value;
    let is_Even = num % 2;
    for (x = 0; x < 6;) {
        if (is_Even === 0) {
            yield num;
            num = fib_Sequence.next().value;
            is_Even = num % 2;
            x++;
        } else {
            num = fib_Sequence.next().value;
            is_Even = num % 2;
        }
    }
}



console.log(`Use the generators to print out the first 6 even Fibonacci numbers: \[`)
for (print_Even_Fib of get_Even()) {
    console.log(print_Even_Fib);
}
