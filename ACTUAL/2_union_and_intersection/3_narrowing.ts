/**
 * Narrowing
 *
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미한다.
 */
let numberOrString: number | string = 'code Factory';
numberOrString;

const decimal = 12.3278;
console.log(decimal.toFixed(2));
