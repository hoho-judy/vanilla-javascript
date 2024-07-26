// 1. 요청하기 위해 필요한 api key 상수 변수로 선언
const API_KEY = "0aaaf943229bb0b973bfd093dc433b2a"

// 도시명 콤보박스
const weatherSelect = document.querySelector("#weather-select")

// 체감온도, 초속, 날씨아이콘, 도시명, 기온
const feelLikeDisplay = document.querySelector(".feel-like > span")
const windDisplay = document.querySelector(".wind > span")
const weatherDisplay = document.querySelector(".weather > img")
const locationDisplay = document.querySelector(".location")
const temperatureDisplay = document.querySelector(".temperature > span")

// 2. 도시 셀렉트박스 변경 시 addEventListener 추가
weatherSelect.addEventListener("change", (e)=>{
    getWeather(e.target.value)
})


// 3. axios를 통해서 요청
// 인자로 city를 받지만 만약에 아무것도 안받으면 기본값인 서울로 파라미터 초기화
// async ... await : 응답 받을때까지 기다렸다가, 받으면 그 다음 프로세스 처리
const getWeather = async (city = 'seoul') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`    
    const response = await axios.get(url)

    const { name, main, weather, wind } = response.data // 한 번에 쓸 수 있도록 디스트럭쳐링!

    // locationDisplay.innerText = response.data.name 
    locationDisplay.innerText = name
    // temperatureDisplay.innerText = transferTemperature(response.data.main.temp)
    temperatureDisplay.innerText = transferTemperature(main.temp) 

    weatherDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`)
    
    windDisplay.innerText = wind.speed
    feelLikeDisplay.innerText = transferTemperature(main.feels_like)

    console.log(response, response.data.name)
}

// 온도 섭씨 변환 함수(소수점 첫째자리까지만 보여줌)
const transferTemperature = (temp) => {
    return (temp - 273.15).toFixed(1)
}

getWeather()