// 받아와야 하는 것
// 도시명, 기온, 아이콘, 체감온도, 초속
const API_KEY = "0aaaf943229bb0b973bfd093dc433b2a"
const inputCity = document.querySelector("#input-city")
const cityDisplay = document.querySelector(".city")
const temperatureDisplay = document.querySelector(".temperature-data")
const weatherIconDisplay = document.querySelector(".weather-icon > img")
const feelDisplay = document.querySelector(".feel-data")
const windDisplay = document.querySelector(".wind-data")

inputCity.addEventListener("keypress", (e)=>{
    if(e.keyCode === 13) {
        getWeather(e.target.value)
    }
})

const getWeather = async (city = 'seoul') => {
    // axios 사용 방법
    // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    // .then(response => {
    //     const { name, main, weather, wind} = response.data
        
    //     cityDisplay.innerText = name
    //     temperatureDisplay.innerText = transferTemperature(main.temp)
    //     weatherIconDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`)
    //     feelDisplay.innerText = transferTemperature(main.feels_like)
    //     windDisplay.innerText = wind.speed
    // })
    
    // async-await을 사용하는 방법
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response = await axios.get(url)
    const { name, main, weather, wind} = response.data
        
    cityDisplay.innerText = name
    temperatureDisplay.innerText = transferTemperature(main.temp)
    weatherIconDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`)
    feelDisplay.innerText = transferTemperature(main.feels_like)
    windDisplay.innerText = wind.speed

    // console.log(name, main, weather, wind)
}

const transferTemperature = (temp) => {
    return (temp - 273.15).toFixed(1) // 소수점 둘째자리에서 반올림하고 소수점 첫째자리까지 보여줌
}

getWeather()