let isDone: boolean = true;

const str: string = 'hello';

//let num: number = 2;

// const sum: number = 'sum number';

// Type 'string' is not assignable to type 'number'.


let array: number[] = [1, 2, 3];

const strArr: Array<string> = ['hello', 'world'];

const objArr: Array<object> = [
    { item: 'value' },
    { itme: 'value2' }
];

// objArr.map(obj => {
//     console.log(`item: ${obj.item1}`)
// })
// objArr.map((obj: any) => {
//     console.log(`item: ${obj.item1}`);
// })

/**
 * object vs Object
 */

const foo = (obj: object): void => {
    console.log(obj);
};

const boo = (obj: Object): void => {
    console.log(obj);
}

// foo('hi');
// Argument of type 'string' is not assignable to parameter of type 'object'.

boo('hi');


/**
 * function return type
 */

function foo2(a: number, b: number): number {
    return a + b;
}

const boo2 = (a: number, b: number): number => {
    return a + b;
}

const noReturn = (): void => {
    console.log('hihi');
}

// foo2('hello', 2); 
// Argument of type 'string' is not assignable to parameter of type 'number'

/**
 * null , undefined
 */

let a: null = null;

// let x: null = 2; 
// Type '2' is not assignable to type 'null'

let b: undefined = undefined;

// let y: undefined = null;
// Type 'null' is not assignable to type 'undefined'.

console.log(b);

/**
 * Type assertions
 */

// angle-bracket
let myName: any = '채정아';
let myNameLength: number = (<string>myName).length;

// as 
let yourName: any = "강민재";
let yourNameLength: number = (yourName as string).length;

/**
 * any
 */

const unknown: any = {
    name: '채정아',
    age: 18,
    organization: 'SOPT',
    completion: [28, 29]
}

console.log(unknown);



let name1: string = '박정훈';
console.log(name1);

let grade: number = 4;
let isDeleted: boolean = false;

// const ages: number[] = [1, 2, 3, 4, 5];
const ages: Array<number> = [1, 2, 3, 4];

const obj1: object = {
    // 소문자 오브젝트
    // 원시형이 아닌 모든 값 받을 수 있음
}

const obj2: Object = {
    // 대문자 오브젝트
    // 걍 다 가능
}

const f1 = (obj: object): void => {
    console.log(obj);
}

const f2 = (obj: Object): void => {
    console.log(obj);
}

f2([1, 2, 3, 4]);
f2('hihi');

f1([1, 2, 3, 4]);
//f1('hihi'); // error : 원시형인 string이라 에러