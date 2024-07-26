// const output = document.getElementById("output")
// const wrapper = document.getElementsByClassName("wrapper")

// ES6식 문법(선택자)
const button = document.querySelector("#button")
const wrapper = document.querySelector(".wrapper")
const items = document.querySelectorAll(".item")
const target = document.querySelector(".target")
const title = document.querySelector("h1") // h1 태그 선택
const userId = document.querySelector("#userId")
const point = document.querySelector(".point")

// target.style.color = "red"
// target.style.fontSize = "36px"

// 이벤트를 걸기 위한 펑션 : addEventListener
// 이벤트가 실행될 이벤트명, 이벤트로 인한 콜백 - 실행할 함수
title.addEventListener("click", function(){
    title.style.color = "red"
})

// input 태그에 어떤 글자가 입력될때마다 일어나는 이벤트 추가
// e : 기본 파라미터, 이벤트 객체로 일어난 이벤트의 정보를 가지고 있음
userId.addEventListener("input", function(e) {
    target.innerText = this.value
})

button.addEventListener("click", ()=>{
    target.style.width = "50px"
    target.style.height = "50px"
    target.style.backgroundColor = userId.value
    target.style.borderRadius = "50%"
})

items.forEach(item => {
    item.addEventListener("click", () => {
        point.innerText = item.innerText
    })
})

// console.log(items)

// output.innerText = "전송"
// wrapper[0].innerText = "html"

// console.log({button})
// console.log({wrapper})

// console.log(items)

