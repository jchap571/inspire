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

      //   await todoService.createTodo(todoFormData)


      //   Pop.toast('you created a new todo!')
    } catch (error) {
      //   Pop.error(error)
      //   console.error(error)
    }
  }



  countTodos() {
    for (let i = 0; i < Todo.length; i++) {
      let total = AppState.todos.length
      console.log('# of todos is,' + total)
      const totalToDoElem = document.getElementById('total-todos')
      totalToDoElem.innerText = `# of To Do's is: ` + total.toString()

    }
  }

}