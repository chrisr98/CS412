const {describe, it} = require('mocha') // mocha.org for docs
const {expect} = require('chai')// chai.org for docs

const {alphabetOrder} = require('../PS1_P1') // use destructuring to  pick a

describe('Testing PS1 problem 1', () => {

    //Set up individual unit tests
    it('Should return aaacccdeefgiiiiiiillloopprrssstuux if supercalifragilisticexpialidocious is inputted', function(){
        let ans = alphabetOrder('supercalifragilisticexpialidocious');
        expect(ans).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });
    it('Should throw error when input is not a string', function(){
        let ans = alphabetOrder(42);//The answer to life
        expect(ans).to.be.equal("Not a valid input");
    });
    it('The output should not have number or punctuations', function(){
        let ans = alphabetOrder('majdgha.42');
        expect(ans).to.be.equal('aadghjm');//Nan = not a number
    });

})


const {evaluate} = require('../PS1_P2') // use destructuring to  pick a
// Make sure the directory is correct| function from file being tested

describe('Testing PS1 problem 2', () => {
    describe('Test all example inputs from probelm', () => {
        let inputs = ['4+2','5*7','6-1','9/2','8%3'];
        let outputs = [6,35,5,4.5,2];
        for (let i = 0; i< inputs.length; i++) {
            it('Correct answer should be = ' + outputs[i], function () {
                let test = evaluate(inputs[i])(inputs[i].charAt(0),inputs[i].charAt(2));
                expect(test).to.be.equal(outputs[i]);
            });
        }
    });

    it('Input should always be an expression as a string', function(){
        let test = evaluate(40);
        expect(test).to.be.equal("Not a valid input");
    });

    it('input must be of form {digit, operator, digit}', function(){
        let test = evaluate('123+2');
        expect(test).to.be.equal("Not a valid input");
    });

})

const {executeFunc} = require('../PS1_P3')

const reverseAlphabetOrder = (str) => str.replace(/[.!?\\-]/g, '').replace(/[0-9]/g, '').split('').sort().reverse().join('');

const useUpper_A = (str) => {
    return str.replace(/a/g, 'A')
};

describe('Testing PS1 problem 3', () => {
    describe('Run sample test', () => {
        let array = ['supercalifragilisticexpialidocious', 'thequickbrownfoxjumpedoverthelazydog', 'clap'];
        let func = [alphabetOrder, reverseAlphabetOrder, useUpper_A];
        let ans = ['aaacccdeefgiiiiiiillloopprrssstuux', 'zyxwvuuttrrqpoooonmlkjihhgfeeeeddcba', 'clAp']
        for (let i = 0; i< array.length; i++) {
            it('Should return the following = ' + ans[i], function () {
                let res = executeFunc(array[i],func[i]);
                expect(res).to.be.equal(ans[i]);
            });
        }
    });
})