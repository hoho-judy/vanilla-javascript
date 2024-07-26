const url = "https://random-word-api.herokuapp.com/word?number=1000"
// const SETTING_TIME = 10
let wordsArr = []
let isPlaying = false // 게임 중이냐?
let isReady = false   // 게임 시작 준비가 됐냐?
let settingTime = 0
let score = 0
let palyTime = 0
let timeInterval

const wordsDisplay = document.querySelector(".words-display")
const wordsInput = document.querySelector("#input-words")
const timeDisplay = document.querySelector(".time")
const scoreDisplay = document.querySelector(".score")
const gameButton = document.querySelector(".start-game-button")

const lowLvlButton = document.querySelector(".low-level")
const midLvlButton = document.querySelector(".mid-level")
const highLvlBtton = document.querySelector(".high-level")

// 토스트 메시지 보여주기
const showMsg = (inputText) => {
    Toastify({
        text: inputText,
        duration: 3000,
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        style: {
          background: "linear-gradient(50deg, #8360c3, #2ebf91)",
        }
      }).showToast();
}

// 초가 줄어드는 함수
const countDown = () =>{
    if(palyTime > 0) {
        palyTime--
    } else {
        clearInterval(timeInterval)
        isPlaying = false
    }
    timeDisplay.innerText = palyTime
}

// 게임시작 버튼 클릭 시 시간 줄어들기
const run = (id) => {
    clearInterval(timeInterval) // 버튼 계속 클릭 시 시간 꼬이지 않게
    if(!isReady) {
        return
    }

    // 난이도 상, 중, 하 판별
    if(id === "lowBtn") {
        settingTime = 20
    } else if(id === "midBtn") {
        settingTime = 10
    } else {
        settingTime = 5
    }

    timeInterval = setInterval(countDown, 1000)
    score = 0
    // palyTime = SETTING_TIME
    palyTime = settingTime
    wordsDisplay.innerText = "Welcome!"
    wordsInput.value = ""
    scoreDisplay.innerText = score
    isPlaying = true
}

// 단어 불러오는 함수, 단어가 다 불러와지면 버튼 상태 바꾸기
const getWords = async ()=> {
    const response = await axios.get(url)
    wordsArr = response.data.filter((word)=>{return word.length < 8})
    // gameButton.innerText = "게임시작"
    // gameButton.classList.remove("loading")
    lowLvlButton.classList.remove("loading")
    midLvlButton.classList.remove("loading")
    highLvlBtton.classList.remove("loading")
    isReady = true
}

// 단어 불러오고 타임 세팅
const init = () => {
    // palyTime = SETTING_TIME
    palyTime = settingTime
    getWords()
}

// 단어 입력해서 맞힐 때마다 점수 증가
const checkMatch = () => {
    if(!isPlaying) {
        return
    }
    if(wordsInput.value.toLowerCase() === wordsDisplay.innerText.toLowerCase()) {
        score++
        showMsg(wordsInput.value)
        wordsInput.value = ""
        // palyTime = SETTING_TIME
        palyTime = settingTime

        // 랜덤인덱스를 구해서 단어 배열 인덱스 랜덤하게 지정
        let randomIndex = Math.floor(Math.random() * wordsArr.length)
        let randomWords = wordsArr[randomIndex]     
        wordsDisplay.innerText = randomWords 
    }
    scoreDisplay.innerText = score
}

wordsInput.addEventListener("input", checkMatch)

init()