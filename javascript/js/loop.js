const animals = [
    {
        name : "monkey",
        size : "medium",
        isAggressive : false,
        weight :20
    },
    {
        name : "lion",
        size : "big",
        isAggressive : true,
        weight :100
    },
    {
        name : "tiger",
        size : "big",
        isAggressive : true,
        weight :200
    },
    {
        name : "hippo",
        size : "big",
        isAggressive : true,
        weight :1000
    },
    {
        name : "cat",
        size : "small",
        isAggressive : false,
        weight :5
    }
]

// old
// for(let i = 0; i < animals.length; i++) {
//    console.log(animals[i])
//}

// for(let animal of animals) {
//    console.log(animal.size)
//}

// let i=0;
// while(i < 10) {
    
//    i++
//}

// ES6식 문법
// forEach, map, reduce, filter

// 1. forEach
animals.forEach(function (animal, index) {
  //  console.log(animal, index)
})

// 2. map
// 배열을 재정의할때 사용하는 반복문
// 특정 요소만 반환해주고 싶을 때
const mappedAnimal = animals.map(function (animal) {
    // return animal.name
    // return {name : animal.name, size : animal.size}
    return `${animal.name} is ${animal.size}`
})

console.log(mappedAnimal)

// ES6 문법
// function(){} 이 형태를 ()=>{} 이렇게 씀
const mappedAnimal2 = animals.map((animal2)=>{
    return animal2.name
})
// arrow funtion으로 쓰면 좋은 점 : 인덱스 넘기지 않고 인자가 1개일 때 괄호 삭제 가능
const mappedAnimal3 = animals.map(animal3=>animal3.name)
console.log(mappedAnimal3)

// 3. filter
// 조건에 부합하는 값만 리턴
const filterAnimal = animals.filter(animal4=>animal4.weight >= 200 && animal4.size == "big")

console.log(filterAnimal)

// 4. reduce
// 배열의 합을 구함, 배열 값들을 새로운 값으로 도출할 때
// acc : 누적되는 값이고 최초 0으로 초기값을 지정해줘야 함!!
// cur : 현재값
const reduceAnimal = animals.reduce((acc, cur)=>{
    return acc + cur.weight // 0 + 몽키의 몸무게 + 라이언의 몸무게 + ... + 캣의 몸무게
}, 0)

console.log(reduceAnimal)