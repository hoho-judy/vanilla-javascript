// 사용할 변수들
const SETTING_TIME = 9;
let words = [];
let time;
let isReady = false;
let isPlay = false;
let score = 0;
let timeInterval;

const url = "https://random-word-api.herokuapp.com/word?number=100"
const wordDisplay = document.querySelector(".word-display")
const wordInput = document.querySelector(".word-input")
const scoreDisplay = document.querySelector(".score")
const timeDisplay = document.querySelector(".time")
const button = document.querySelector(".button")

// 토스트 라이브러리 사용
runToast = (text) => {
    const option = {
        text: text,
        duraton: 3000,
        newWindow: true,
        gavity: 'top',
        position: "left",
        background : "linear-gradient(#00b09b, #96c3d)"
    }
    Toastify(option).showToast()
}

// 랜덤 단어 가져오는 axios
const getWords = () => {
    axios.get(url).then(response => {
        words = response.data.filter(word => word.length < 8) // 글자 길이 8 미만인 것만 필터링
        button.innerText = '게임시작'
        button.classList.remove('loading')
        isReady = true
    }).catch(err => console.log(err))
}

// 최초 실행 시 
const init = () => {
    time = SETTING_TIME
    getWords()
}

// 제한시간 줄어드는 함수
const countDown = () => {
    if(time > 0 ){
        time--
    } else {
        clearInterval(timeInterval)
        isPlay = false
    }
    timeDisplay.innerText = time
}

// 게임시작 버튼 클릭 함수
const run = () => {
    clearInterval(timeInterval)
    if(isReady === false) {
        return
    }
    timeInterval = setInterval(countDown, 1000)
    wordInput.value = ""
    score = 0
    time = SETTING_TIME
    scoreDisplay.innerText = score
    isPlay = true
}

// 점수 계산 함수
const checkMath = () => {
    if(!isPlay) {
        return
    }
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
        score++
        runToast(wordDisplay.innerText)
        time = SETTING_TIME
        wordInput.value = ""
        const randomIndex = Math.floor(Math.random() * words.length)
        wordDisplay.innerText = words[randomIndex]
    }
    scoreDisplay.innerText = score
}

// event handler
wordInput.addEventListener("input", checkMath)

init()