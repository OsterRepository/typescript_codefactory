/**
 * Type Inference
 *
 * 타입 추론
 */

let stringType = 'string';
let booleanType = true;
let numberType = 1;

booleanType = false;

// booleanType = 1;

const constStringType = 'const string';
const constBooleanType = true;

let yuJin = {
    name: '안유진',
    year: 2003,
};

const yuJin2 = {
    name: '안유진',
    year: 2003,
};

yuJin2.name = '유진';
console.log(yuJin2);

const yuJin3 = {
    name: '안유진' as const,
    year: 2003 as const,
};

// yuJin3.name = '유진';
console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */

let numbers = [1, 2, 3];
let numbersAndString = [1, 2, 3, '4'];

// numbers.push('5');
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[100];

// tuple
const twoNumbers = [1, 2] as const;

// twoNumbers[0] = 3;
// twoNumbers.push(3);
const first = twoNumbers[0];
// const first2 = twoNumbers[100];
