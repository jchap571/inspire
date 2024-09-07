import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { Weather } from "../models/Weather.js";



export class WeatherController {
  constructor() {
    console.log('weather controller is loaded!')
    this.getWeather()







  }


  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }


  drawWeather(){
    const weather = AppState.weather
    setHTML('temperature', weather.main.weatherHTMLTemplate)
  }




}