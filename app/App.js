import { AuthController } from './controllers/AuthController.js';
import { router } from './router-config.js';
import { PictureController } from "./controllers/PictureController.js";
import { TodoController } from "./controllers/ToDoController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { WeatherController } from "./controllers/WeatherController.js";
// import { TimeController } from './controllers/TimeController.js';



const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  PictureController = new PictureController()
  TodoController = new TodoController()
  QuotesController = new QuotesController()
  WeatherController = new WeatherController()
  // TimeController = new TimeController()






  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
