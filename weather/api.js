// 자바스크립트 내장함수이며 괄호에 주소 넘기고 주소로부터 받은 값을 then 안에서 응답을 제이슨으로 변경, 그 제이슨을 콘솔 로그로 출력한 것
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

// axios 쓰는 방법
axios.get('https://jsonplaceholder.typicode.com/users', {params: {id:2}})
  .then(function (response) {
    // handle success
    console.log(response, 'success');
  })
  .catch(function (error) {
    // handle error
    console.log(error, 'error');
  })
  .finally(function () {
    // always executed
  });