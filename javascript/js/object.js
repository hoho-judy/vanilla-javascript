// Object
// key, value 쌍을 이루는 객체
// 오브젝트 안에 단순 변수, 또 다른 오브젝트, 메서드가 들어갈 수 있음
const animal = {
    name : "monkey",
    weight : 10,
    food : ["banana", "grape", "nuts"],
    location : { // 또 다른 object 가질 수 있음
        country : "Kongo",
        home : "forest",
        isAfrica : true
    }
}

console.log(animal.name)
console.log(animal.food)
console.log(animal.food[1])
console.log(animal.location.country)

// JSON
// 서버로 데이터를 보내거나 받을때, HTTP 통신할 때 데이터 전송/수신 형식
// Object같이 생겼지만 키값도 모두 ""로 묶여있음
// Object -> JSON으로 변환
// JSON으로 변환되면 Object에서 프로퍼티 접근하듯이 접근할 수 없음.
const animalJson = JSON.stringify(animal)
console.log(animalJson)

// Object -> JSON으로 변환
// .으로 접근하려면 JSON 문자열을 다시 Object로 변환
console.log(JSON.parse(animalJson).name)
console.log(JSON.parse(animalJson))