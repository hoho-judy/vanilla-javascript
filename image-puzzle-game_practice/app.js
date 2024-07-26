const SETTING_TIME = 60
const timeDisplay = document.querySelector(".play-time")
const imgContainer = document.querySelector(".image-container")
const tiles = document.querySelectorAll(".image-container > li")
const startButton = document.querySelector(".start-game")
const gameText = document.querySelector(".game-text")

let isPlaying = false
let timeInterval = null

const pickImg = {
    el: null,
    class: null,
    index: null
}

// 이미지 뒤섞기
const shuffle = (array) => {
    let index = array.length - 1
    while(index > 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
        index--;
    }
 
    return array
}

// SETTING_TIME에서부터 1초씩 줄어들기
const countDown = () => {
    clearInterval(timeInterval)
    time = SETTING_TIME
    timeInterval = setInterval(()=>{
        time--
        if(time < 0) {
            isPlaying = false
            clearInterval(timeInterval)
            gameText.innerText = "Game Over!!!"
            gameText.style.display = "block"
            return 
        } else {
            isPlaying = true 
        }
        timeDisplay.innerText = time
    }, 1000)   
}

// 이미지 뒤섞기
const setGame = () =>{
    timeDisplay.innerText = SETTING_TIME
    gameText.style.display = "none"

    imgContainer.innerHTML = ""
    const gameTiles = shuffle([...tiles])
    gameTiles.forEach((ele)=>{
        imgContainer.appendChild(ele)
    })
}

// 퍼즐 조각이 모두 제자리를 찾았는지 체크
const checkStatus = () => {
    const unMatched = [...imgContainer.children].filter((child, index)=>{
        return Number(child.getAttribute("data-type")) !== index
    })

    if(unMatched.length === 0) {
        clearInterval(timeInterval)
        gameText.style.display = "block"
        isPlaying = false
    }
}

startButton.addEventListener("click", ()=>{
    setGame()
    countDown()
})

// 들어올린 놈이 e.target
imgContainer.addEventListener("dragstart", (e)=>{
    const obj = e.target 
    pickImg.el = obj
    pickImg.class = obj.className
    pickImg.index = [...obj.parentNode.children].indexOf(obj)
 // console.log({pickImg})
})

imgContainer.addEventListener("dragover", (e)=>{
    e.preventDefault()
})

// 기존 바닥에 있던 놈이 e.target, 들어올려서 놓는 놈의 자리와 바뀌어야 함
imgContainer.addEventListener("drop", (e)=>{
    const obj = e.target
    // obj.before(pickImg.el)
    const droppedIndex = [...obj.parentNode.children].indexOf(obj)
    let originPlace
    let isLast = false

    if(pickImg.el.nextSibling) {
        originPlace = pickImg.el.nextSibling
    } else {
        originPlace = pickImg.el.previousSibling
        isLast = true
    }
    // 들고온 놈의 인덱스가 원래 있던 놈의 인덱스보다 크면 뒤에서 왔다는 것이므로
    pickImg.index > droppedIndex ? obj.before(pickImg.el) : obj.after(pickImg.el)
    
    // 들고온 놈이 마지막 요소였다면 originPlace에 들고온 놈 앞에 있는 놈을 넣었기 때문에 그뒤에 둬야함
    isLast ? originPlace.after(obj) : originPlace.before(obj)

    checkStatus()
})