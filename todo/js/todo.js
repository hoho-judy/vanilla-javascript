const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector(".todo-list")

// 변수명.addEventListener("액션명", "기능-콜백 함수")
todoInput.addEventListener("keypress", (e)=>{
    if(e.keyCode === 13) {
        generateTodo(todoInput.value)
        todoInput.value = ""
    }
})

const generateTodo = (todo) => {
    const li = document.createElement("li")
    const likeSpan = generateLike()
    const likeItem = generateItem(todo)
    const likeManage = generateManage()
    li.appendChild(likeSpan)
    li.appendChild(likeItem)
    li.appendChild(likeManage)
    todoList.appendChild(li);
}

const generateLike = () => {
    const span = document.createElement("span")
    span.classList.add("todo-like")
    const icon = document.createElement("i")
    icon.innerText = "favorite_border"
    icon.classList.add("material-icons")
    icon.classList.add("like")
    span.appendChild(icon)

    // 리스트가 만들어졌을 때 하트 클릭 시 액션
    icon.addEventListener("click", () => {
        icon.innerText === "favorite_border" 
        ? icon.innerText = "favorite" : icon.innerText = "favorite_border"
    })

    return span;
}

const generateItem = (todo) => {
    const span = document.createElement("span")
    span.classList.add("todo-item")
    span.innerText = todo
    return span;
}

const generateManage = () => {
    const span = document.createElement("span")
    span.classList.add("todo-manage")
    const icon1 = document.createElement("i")
    const icon2 = document.createElement("i")
    
    icon1.classList.add("material-icons")
    icon1.classList.add("check")
    icon1.innerText = "check"

    icon2.classList.add("material-icons")
    icon2.classList.add("clear")
    icon2.innerText = "clear"

    // 체크 버튼 클릭 시
    icon1.addEventListener("click", (e) => {
        const li = e.target.parentElement.parentElement
        li.classList.add("done")
    })

    // 삭제 버튼 클릭 시
    icon2.addEventListener("click", (e) => {
        const li = e.target.parentElement.parentElement
        todoList.removeChild(li)
    })

    span.appendChild(icon1)
    span.appendChild(icon2)
    return span;
}