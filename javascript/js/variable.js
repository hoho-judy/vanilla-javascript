// var, let, const
// var로 선언 많이 했지만 이제는 안쓰는 추세. let, const로 대체
// window 객체 안에 var 변수가 선언되어버림.
// let, const는 window 객체 안에 저장되지 않으므로 let, const 쓰는걸 권장
// var는 반복문 안에서 코드 블럭 안에서 선언한 변수를 바깥에서 또 쓸 수 있어서 쓰지 않는 것을 권장 
// 값을 재정의할 필요 없는 상수는 const로 선언, let은 계속 변하는 값을 선언할 때 사용

// 데이터 타입 : String, Number, boolean, null, undefined, symbol(ES6에서 나옴)


// 1. String
// 문자열이고 "", '', ``로 선언 가능
const name = "june Lee"

// 2. Number
const age = 34
const weight = 47.1

// 3. boolean
const isMale = true

// 4. null
const money = null

// 5. undefined
const empty = undefined

console.log(typeof name)
console.log(typeof age)
console.log(typeof weight)
console.log(typeof isMale)
console.log(typeof money) // null인데 타입은 오브젝트로 나옴
console.log(typeof empty)

let boyFriend;
console.log(boyFriend)

// ES6 템플릿 문법
// 문자열 합칠 때 이런 문법을 쓰는것이 좋음
console.log(`제 이름은 ${name} 이고 나이는 ${age} 입니다.`)

const user = "juyeon Kim"
console.log(user.substring(0, 4).toUpperCase());
console.log(user.substring(0, 6).toLowerCase());
console.log(user.substring(2, 6));

// 조건을 주지 않아서 한글자씩 모두 잘림
// split으로 자르면 배열에 저장됨
console.log(user.split(""))

// 공백 기준으로 자름
console.log(user.split(" "))

// 배열에 들어간 값을 문자열 1개로 붙이는 펑션 join()
const hobbies = ["game", "programing", "tv", "youtube"]
console.log(hobbies.join())
console.log(hobbies.join().split(","))

const homework = "eng,kor,math,history"

console.log(homework.split(","))
