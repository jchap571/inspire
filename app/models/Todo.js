import { AppState } from "../AppState.js"


export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description
    this.creatorId = data.creatorId
  }





// Needs ID for todo list item to delete
  get todoListHTMLTemplate() {
    return /*html*/`
     <input onchange="app.TodoController.completeTodo('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''}>
          <label for="">${this.description}</label><br>
          <button onclick="app.TodoController.deleteTodos()" type="button" class="btn btn-danger">Delete</button>
          <hr>
    `
  }
}







// Todos coming back as an array of objects !!!!
// {
//   "completed": {
//     "type": "Boolean",
//     "required": true,
//     "default": false
//   },
//   "description": {
//     "type": "String",
//     "required": true,
//     "maxLength": 500
//   },
//   "creatorId": {
//     "type": "SchemaObjectId",
//     "required": true,
//     "ref": "Account"
//   }
// }


