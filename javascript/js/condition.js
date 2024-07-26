// 1. if else
const x = "10"

// 변수, 비교값의 값만 비교
if(x == 10) {
    console.log("x is ten")
}

// 변수, 비교값의 타입까지 비교할 때는 ===로 비교
// 자바스크립트는 타입을 긴밀하게 체크하지 않아서 오류가 날 수 있으므로 가급적으로 ===를 쓰는걸 권장
if(x === 10) {
    console.log("x is ten")
} else if(x === 20) {
    console.log("x is 20")
} else {
    console.log("x is string")
}

if(x !== 9) {
    console.log("x is ten")
}

const age = 20
let group = ""
/* if(age > 20) {
    group = "senior"
} else {
    group = "junior"
} */

// 2. 삼항연산자 ---> 조건 ? 참일경우 : 아닐경우
age > 20 ? group = "senior" : group = "junior"
console.log(group)

// 3. swtich
const animal = "monkey"
switch(animal) {
    case 'lion':
        console.log("big")
        break
    case 'tiger':
        console.log("big")
        break
    case 'monkey':
        console.log("medium")
        break
    case 'dog':
        console.log("small")
        break
    case 'cat':
        console.log("small")
        break
    default:
        console.log("not animal")
        break;
}

// 4. function
function add(a, b) {
    return a + b
}

console.log(add(1, 4));
console.log(add()); // 그냥 선언하면 NaN 출력

// ES6에서는 펑션 파라미터 초기값을 줄 수 있음.
// 함수 호출부에서 아무것도 넘기지 않을 때 초기값으로 연산하여 결과를 리턴
function add2(a=0, b=0) {
    return a + b
} 
console.log(add2()); 

// 변수에 함수 담기
const sum = function(a, b){return a + b}
const minus = (a, b)=>{return a - b}
const sum2 = a => {return a + 5} // 인자가 1개일 때는 괄호 생략 가능
const sum3 = a => a + 5 // 리턴도 1줄이면 중괄호도 생략 가능

console.log(sum3(10))