import { AppState } from "../AppState.js"


export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
  }






  get todoListHTMLTemplate() {
    return `
     <input type="checkbox" id="" name="" value="">
          <label for="vehicle1">To Do 1</label><br>
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


