// Array
// 여러 변수가 모여있는 그룹\
// Array는 const로 선언해도 가지고 있는 요소들은 바꿀 수 있음(배열 통째로 다시 선언하는 것은 불가능함)
const users = ["june", "mike", "chulsoo", "sumin", 10, 34, null, undefined, "love"]
console.log(users)
console.log(users[1])
console.log(users[2])
console.log(users[7])

// 마지막 인덱스 구하기
console.log(users[users.length-1])

// 배열에 값 바꾸기
users[3] = "jane"
console.log(users)

// 배열 맨 마지막에 데이터 추가
users.push("Soo") 
users.push("Koll") 
console.log(users)

// 배열 맨 앞에 데이터 추가
users.unshift("주연")
console.log(users)

// 배열 맨 마지막 값 꺼내기
users.pop()
users.pop()
console.log(users)

// 특정 값이 가진 인덱스 구하기
console.log(users.indexOf("mike"))

// 인덱스에 해당하는 값 바꾸기
users[users.indexOf("mike")] = "마이클"
console.log(users)

// 배열인지 아닌지 판단해서 true, false 리턴
console.log(Array.isArray(users))

// 배열 값 자르기
// 1. splice
users.splice(0, 1) // 인덱스 0번부터 1개만 잘라낸다
console.log(users)


// 2. slice
// 자르기 시작인덱스, 종료인덱스
users.slice(2, 3)
console.log(users)

// ...spread operator(ES6부터 시작)
// 이렇게 쓰면 배열에 들어있는 값만 가져옴
console.log(...users)