var todosArray = [
    {id:1, title: "Learn Js", isDoing: false},
    {id:2, title: "Make Footer", isDoing: true},
    {id:3, title: "Design", isDoing: false},
    {id:4, title: "Vue.js", isDoing: true},
]

var userMenu = prompt("Choose one of these: \n 1.Add Todo \n 2.Remove Todo \n 3.Do Todo")

if (userMenu === '1') {
    var newTodoName = prompt("Enter The New Todo Name: ", "");
var newTodoObject = {
    id: todosArray.length + 1,
    title: newTodoName,
    isDoing: false
    }
    todosArray.push(newTodoObject)
    console.log("Todos Array: " , todosArray)

} else if (userMenu === '2') {
    var removeTodoName = prompt("Enter Your Removable Todo Name: ", "")
    var removableTodoIndex = todosArray.findIndex(function (todo) {
        return todo.title === removeTodoName;
    })
    todosArray.splice(removableTodoIndex, 1)
    console.log("Todos Array: " , todosArray)

} else if (userMenu === '3') {
    var editableTodoName = prompt("Enter Your Editable Todo Name: ", "")
    todosArray.forEach(function (todo){
    if (todo.title === editableTodoName) {
        todo.isDoing =true
    }
})
    console.log("Todos Array: " , todosArray)

} else {
    alert("گزینه وارد شده معتبر نمی باشد")
}