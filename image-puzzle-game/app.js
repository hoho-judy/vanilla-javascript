const container = document.querySelector(".image-container")
const startButton = document.querySelector(".start-button")
const gameText = document.querySelector(".game-text")
const playTime = document.querySelector(".play-time")
const tiles = document.querySelectorAll(".image-container > li")
const cheatKey = document.querySelector(".cheat-key") // data-type 값이 텍스트로 빠지게

let isPlaying = false
let timeInterval = null
let time = 0


// 드래그한 대상을 담을 객체
const dragged = {
    el: null,
    class: null,
    index: null
}

// 힌트 버튼 누르면 번호가 보여지게 함
cheatKey.addEventListener("click", ()=>{
    [...container.children].forEach(child => {
        child.innerText = child.getAttribute("data-type")
    })
})

startButton.addEventListener("click", ()=>{
    setGame() // 시간 1초씩 증가 & 이미지조각 랜덤하게 뒤섞기
})

const setGame = () => {
    time = 0
    gameText.style.display = "none"

    timeInterval = setInterval(()=>{
        time++
        playTime.innerText = time
    }, 1000)

    const gameTiles = shuffle([...tiles]); // tiles는 nodelist임.. 배열이 아니야
    
    container.innerHTML = "";
    gameTiles.forEach(element => {
        container.appendChild(element)
    })
}

// 상태 체크해서 다 맞추면 클리어인터벌, 게임 종료
const checkStatus = () => {
    const currentList = [...container.children]
    
    const unMatched = currentList.filter((list, index)=>{
        return Number(list.getAttribute("data-type")) !== index // 매칭이 안된 것들 필터링
    })

    if(unMatched.length === 0) { // 매치 안된 개수가 0이면 다 맞춘거고 플레잉 여부 false, 클리어인터벌 호출
        isPlaying = false 
        clearInterval(timeInterval)
        gameText.style.display = "block" // 컴플리트 텍스트 보이게 처리
    }
}

const shuffle = (array) => {
    let index = array.length - 1
    while(index > 0) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        // 배열 0, 1인덱스의 값을 서로 바꾸는 문법
        // [array[0], array[1]] = [array[1], array[0]];
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
        index--;
    }
    return array
}

container.addEventListener("dragstart", (e)=>{
    const obj = e.target
    console.log({obj})
    dragged.el = obj 
    dragged.class = obj.className
    dragged.index = [...obj.parentNode.children].indexOf(obj) // 스프레드 오퍼레이터 : html 컬렉션을 배열로 바꾸는 문법
  //  console.log(e)
})

container.addEventListener("dragover", (e)=>{
    e.preventDefault()
    // console.log(e)
})

container.addEventListener("drop", (e)=>{
    const obj = e.target // 드롭당한 엘리먼트
    let originPlace // 원래 있던 장소
    let isLast = false // 미지막 여부(nextSibling이 없는 요소)

    // 드래그 해서 놨는데 앞에 아무것도 없으면 앞에 놓고, 뒤에 아무것도 없으면 뒤에 놓는다
    if(dragged.el.nextSibling) {
        // 뒤에 요소가 있는 경우
        originPlace = dragged.el.nextSibling
    } else {
        // 뒤에 요소가 없는 경우 - 마지막 요소라는 뜻
        originPlace = dragged.el.previosSibling
        isLast = true
    }

    // 떨어트린 인덱스 얻기
    const droppedIndex = [...obj.parentNode.children].indexOf(obj)

    // 드롭한 요소의 위치 바꿈
    // 들어올린 요소의 인덱스가 원래 있던놈의 요소 인덱스보다 크면, 이전 요소로 자리잡고 그게 아니면 이후 요소로 자리 잡아라
    dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el)

    // 드롭당한 요소의 위치 바꿈
    isLast ? originPlace.after(obj) : originPlace.before(obj)

    checkStatus()
})