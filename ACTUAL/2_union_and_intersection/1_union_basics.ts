/**
 * Union Basics
 *
 * 유니어능ㄴ TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBoolean: StringOrBooleanType = '아이브';
stringOrBoolean = true;

// stringOrBoolean = undefined;

type StrBoolNulltype = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL';

/**
 * 리스트의 유니언
 */
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = ['아이유', '김고은', '박소담'];

// strListOrBooleanList = [
//     true,
//     '아이유',
// ];

type StrOrNumberList = (string | number)[];
let stringOrNumberList = [1, 2, 3, '아이유', '김고은'];

stringOrNumberList = [1, 2, 3];

stringOrNumberList = ['아이유', '김고은'];

// stringOrNumberList = [
//     true,
//     false,
// ]

/**
 * Interface로 사용하는 union
 */

interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHUman: AnimalOrHuman = {
    name: '아이유',
    age: 29,
    address: '서울',
};

console.log(animalOrHUman);

console.log(animalOrHUman.name);
console.log(animalOrHUman.age);
console.log(animalOrHUman.address);

animalOrHUman = {
    name: '오리',
    age: 2,
};
console.log(animalOrHUman);

console.log(animalOrHUman.name);
console.log(animalOrHUman.age);
// console.log(animalOrHUman.address);

let animalOrHuman2:
    | {
          name: string;
          age: number;
      }
    | {
          name: string;
          age: number;
          address: string;
      } = {
    name: '아이유',
    age: 29,
    address: '서울',
};

console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

animalOrHuman2 = {
    name: '오리',
    age: 2,
};

console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
// console.log(animalOrHuman2.address);

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가

type Person = {
    name: string;
    age: number;
};

type Cat = {
    breed: string;
    country: string;
};

type PersonOrCat = Person | Cat;

const personOrCat: PersonOrCat = {
    name: '아이유',
    age: 29,
    breed: '코숏',
    country: '한국',
};
