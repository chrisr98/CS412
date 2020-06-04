//Fat arrow not allowed inside generators
//Just standard notations

/*Write a generator that is initialized with a sentence
and that emits each word of the sentence in turn.
Use the generator to print the words, one per line,
of the string “All I know is something like a bird within her sang”.
Hint: Splitting a string returns an Array.*/

function* split_Sentence(sentence) {
    let splitted_Str = sentence.split(' ');
    for (x = 0; x<splitted_Str.length; x++) {
        yield splitted_Str[x];
    }
}

let test = split_Sentence("All I know is something like a bird within her sang");
console.log(`The generator should print one word per line: `);

for (word of test){
    console.log(word)
}
