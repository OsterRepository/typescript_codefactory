"use strict";
/**
 * Types
 */
let helloText = 'hello';
// helloText = true;
/**
 * JS에 존재하는 타입
 * 7개의 타입
 */
const stringVar = 'String';
const numberVar = 3;
const bigIntVar = BigInt(99999999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
let anyVar;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - any와 비슷하지만 any보다는 타입 안전성이 높다.
let unknownVar;
unknownVar = 100;
unknownVar = '코드팩토리';
unknownVar = true;
// let testNumber2: number = unknownVar;
// let testString2: string = unknownVar;
// let testBoolean2: boolean = unknownVar;
let unknownType2 = unknownVar;
let anyType2 = unknownVar;
// never - 절대 발생할 수 없는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'test';
/**
 * 리스트 타입
 */
const koreanGirlGroup = ['트와이스', '에이핑크', '걸스데이'];
const booleanList = [true, false, true];
