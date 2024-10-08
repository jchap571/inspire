import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Picture } from "./models/Picture.js"
import { Quote } from "./models/Quotes.js"
import { Todo } from "./models/Todo.js"
import { Weather } from "./models/Weather.js"
// import { Time } from './models/Time.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null


  /**@type {Picture} */
  picture = null

  /**@type {Quote} */
  quote = null

  /**@type {Todo[]} */
  todos = []

  todo = null

 /**@type {Weather} */
  weather = null

  //  /**@type {Time} */
  // time = null


}
   


export const AppState = createObservableProxy(new ObservableAppState())