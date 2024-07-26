const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector(".todo-list")
const todoAllBtn = document.querySelector("#todo-all-del")

todoInput.addEventListener("keypress", (e)=>{
   if(e.keyCode === 13) {
       // 입력받은 내용을 넘겨주고 li를 추가해야함
       makeTodoLi(todoInput.value)
       todoInput.value = ""
   }
})

const makeTodoLi = (todo) => {
    // like, item, manage 만드는거 호출
    const li = document.createElement("li")
    const like = makeTodoLike()
    const item = makeTodoItem(todo)
    const manage = makeTodoManage()
    
    li.appendChild(like)
    li.appendChild(item)
    li.appendChild(manage)

    todoList.appendChild(li)
}

const makeTodoLike = () => {
    const span = document.createElement("span")
    span.classList.add("todo-like")

    const i = document.createElement("i")
    i.innerText = "favorite_border"
    i.classList.add("material-icons")
    i.classList.add("like")

    i.addEventListener("click", (e)=>{
        i.innerText === 'favorite_border' 
            ? i.innerText = 'favorite' : i.innerText = 'favorite_border'
    })

    span.appendChild(i)
    return span
}

const makeTodoItem = (todo) => {
    const span = document.createElement("span")
    span.classList.add("todo-item")
    span.innerText = todo
    return span
}

const makeTodoManage = () => {
   const div = document.createElement("div")
   div.classList.add("todo-manage")
   const checkSpan = makeCheck()
   const clearSpan = makeClear()
   div.appendChild(checkSpan)
   div.appendChild(clearSpan)
   return div
}

const makeCheck = () => {
    const span = document.createElement("span")
    span.classList.add("todo-check")

    const i = document.createElement("i")
    i.innerText = "check"
    i.classList.add("material-icons")
    i.classList.add("check")

    i.addEventListener("click", (e) => {
        e.target.classList.add("check-hide")
        e.target.parentElement.parentElement.previousSibling.classList.add("done")
    })

    span.appendChild(i)
    return span
}

const makeClear = () => {
    const span = document.createElement("span")
    span.classList.add("todo-clear")

    const i = document.createElement("i")
    i.innerText = "clear"
    i.classList.add("material-icons")
    i.classList.add("clear")

    i.addEventListener("click", (e) => {
        console.log(e)
        e.target.parentElement.parentElement.parentElement.remove()
    })

    span.appendChild(i)
    return span
}

todoAllBtn.addEventListener("click", (e)=> {
    console.log({todoList})
    while(todoList.firstElementChild) {
        todoList.removeChild(todoList.firstElementChild)
    }
})