document.addEventListener("DOMContentLoaded", () => {
const taskInput = document.getElementById("tareaARealizar")
const addButton = document.getElementById("botonAgregar")
const taskList = document.getElementById("listaDeTareas")
const tasks = JSON.parse(localStorage.getItem("tasks")) || []
const renderTasks = () => {
taskList.innerHTML = ""
tasks.forEach(task => {
const taskItem = document.createElement("li")
taskItem.className = "taskItem"
const checkbox = document.createElement("input")
checkbox.type = "checkbox"
checkbox.checked = task.completed
checkbox.addEventListener("change", () => {
task.completed = checkbox.checked
saveTasks()
renderTasks()})
const taskText = document.createElement("span")
taskText.className = "taskText"
taskText.textContent = task.text
if (task.completed) {
taskText.classList.add("completed")}
taskItem.appendChild(checkbox)
taskItem.appendChild(taskText)
taskList.appendChild(taskItem)})}
const saveTasks = () => {
localStorage.setItem("tasks", JSON.stringify(tasks))}
addButton.addEventListener("click", () => {
const taskText = taskInput.value.trim()
 if (taskText !== "") {
tasks.push({ text: taskText, completed: false })
saveTasks()
renderTasks()
taskInput.value = ""}})
renderTasks()})
