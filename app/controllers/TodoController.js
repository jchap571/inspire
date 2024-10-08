import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { Pop } from "../utils/Pop.js";
import { Todo } from "../models/Todo.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";



export class TodoController {
  constructor() {
    console.log('todo controller is loaded')

    AppState.on('user', this.getTodos)
    AppState.on('todos', this.drawTodos)
    AppState.on('todos', this.countTodos)
  }




  async getTodos() {
    try {
      await todoService.getTodos()
    } catch (error) {
      Pop.error(error)

      console.error(error)
    }
  }


  async createTodo() {
    try {
      event.preventDefault()
      const todoFormElem = event.target
      const todoFormData = getFormData(todoFormElem)
      console.log(todoFormData, todoFormElem)

      await todoService.createTodo(todoFormData)
      this.drawTodos()
      // @ts-ignore
      todoFormElem.reset()
      Pop.toast('you created a new todo!')
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }



  countTodos() {
    let incompleteCount = 0;

    for (let i = 0; i < AppState.todos.length; i++) {
      if (!AppState.todos[i].completed) {
        incompleteCount++;
      }
    }


    const totalToDoElem = document.getElementById('total-todos');
    totalToDoElem.innerText = `# of To Do's is: ${incompleteCount}`;
  }




  drawTodos() {
    console.log('drawing todos ✏️🗒️!')
    const todo = AppState.todos
    let todoHTML = ''
    todo.forEach(todo => todoHTML += todo.todoListHTMLTemplate)
    setHTML('todo-list', todoHTML)

  }



  async deleteTodos(todoId) {
    try {
      console.log('deleting todo')
      const wantsToDelete = await Pop.confirm("Are you sure you want to delete?")
      if (!wantsToDelete) return
      await todoService.deleteTodos(todoId)


    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }


  async completeTodo(todoId) {
    try {
      await todoService.completeTodo(todoId)

    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }






}