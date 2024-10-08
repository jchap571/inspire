import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { setHTML } from "../utils/Writer.js";
import { api } from "./AxiosService.js";


class TodoService {
async  completeTodo(todoId) {
   const todos = AppState.todos

   const todoIndex = todos.findIndex(todo => todo.id == todoId)
   const todo = todos[todoIndex]
   const todoData = {completed: !todo.completed}
   const response = await api.put(`api/todos/${todoId}`, todoData)
   console.log('updated to do item', response.data)
    
   const updatedTodo = new Todo(response.data)
   todos.splice(todoIndex, 1, updatedTodo)


  }



  async createTodo(todoData) {
    const response = await api.post('api/todos', todoData)
    console.log('created a todo!', response.data)
    const newTodo = new Todo(response.data)
    AppState.todos.push(newTodo)
  }



  async getTodos() {
    const response = await api.get('api/todos/')
    console.log('got the todos', response.data)


    const todos = response.data.map(todoData => new Todo(todoData))
    AppState.todos = todos
  }



 async deleteTodos(todoId){
    const response = await api.delete(`api/todos/${todoId}`)
    console.log('deleted todo!', response.data)

    const todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
    AppState.todos.splice(todoIndex, 1)

  }
 

}

export const todoService = new TodoService()