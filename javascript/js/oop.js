// 객체지향 언어로 사용하는 방식은 생성자를 가진 함수로 만들어서 쓰는 것
// ES6 문법
class Song {
    constructor(title, singer, year) {
        this.title = title
        this.singer = singer
        this.year = new Date(year)
    }
    getInfo() {
        return `이 곡의 제목은 ${this.title}이고 가수는 ${this.singer}입니다.`
    }
    getYear() {
        return this.year.getFullYear()
    }
}

const song1 = new Song("Merry Christmas", "Mariah Carrey", "1991-11-23")
console.log(song1.getInfo())

// ES6 이전 문법
// function Song(title, singer, year) {
//     this.title = title
//     this.singer = singer
//     this.year = new Date(year)
//    /*  this.getInfo = function() {
//         return `이 곡의 제목은 ${this.title}이고 가수는 ${this.singer}입니다.`
//     }
//     this.getYear = function() {
//         return this.year.getFullYear()
//     } */
// }

// Song.prototype.getInfo = function() {
//     return `이 곡의 제목은 ${this.title}이고 가수는 ${this.singer}입니다.`
// }
// Song.prototype.getYear = function() {
//     return this.year.getFullYear()/*  */
// }

// const song1 = new Song("Merry Christmas", "Mariah Carrey", "1991-11-23")
// console.log(song1.getInfo(), song1)
// console.log(song1.getYear())
// console.log(song1)
