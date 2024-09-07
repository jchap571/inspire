import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { setHTML } from "../utils/Writer.js";
import { api } from "./AxiosService.js";


class TodoService {
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



  deleteTodos(todoId){
    const todos = AppState.todos
    const todoIndex = todos.findIndex(todo => todo.id == todoId)
    todos.splice(todoIndex, 1)
    this.getTodos
  }
 

}

export const todoService = new TodoService()