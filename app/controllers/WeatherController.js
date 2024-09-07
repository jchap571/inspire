import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { Weather } from "../models/Weather.js";



export class WeatherController {
  constructor() {
    console.log('weather controller is loaded!')
    this.getWeather()
    this.drawWeather()







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


  drawWeather(){
    const weather = AppState.weather.main
    let weatherHTML = ''
    
    setHTML('temperature', weather.weatherHTMLTemplate)
  }




}