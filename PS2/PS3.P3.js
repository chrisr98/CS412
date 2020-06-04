

/*Write a function that prints the cube value of its input (ie f(x)=x^3).
Next, write a single line of code to call the function on each value of the array [1,2,3,4,5,6,7].
Note: This is NOT a generator problem.
Note: The .map( ) method on Array is your friend here.*/

const cube_It = (num) => (num*num*num);

const list_Iteration = (func) => func.map(cube_It);

let array_Test = [1,2,3,4,5,6,7];

console.log(`call the function on each value of the array [1,2,3,4,5,6,7]: [${list_Iteration(array_Test)}]`)

