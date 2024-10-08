import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { Weather } from "../models/Weather.js";



export class WeatherController {
  constructor() {
    console.log('weather controller is loaded!')


    AppState.on('weather', this.drawWeather)
    this.getWeather()



  }


  async getWeather() {
    try {
      await weatherService.getWeather()

      console.log()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }




  async toggleDegrees() {
    try {
      await weatherService.toggleDegrees()
    } catch (error) {
      Pop.error(error)
      console.error(error)

    }


  }




  drawWeather() {
    const weather = AppState.weather


    console.log(weather)
    // setHTML('time-area', time.timeHTMLTemplate)
    setHTML('temperature', weather.weatherHTMLTemplate)
    console.log('drawing weather')

  }


































}