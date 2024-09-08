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
    // this.convertKelvin()
    this.getTime()
    this.drawTime()
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

  convertKelvin(){
    const temperatureInKelvin = AppState.weather.temp

    const temperatureInCelsius = temperatureInKelvin - 273.15
    const temperatureInFahrenheit = (temperatureInCelsius *9/5) + 32
    console.log(temperatureInCelsius)
    return{
      temperatureInCelsius,
      temperatureInFahrenheit
      
    }
  }



  drawWeather(){
    const weather = AppState.weather
      
    
    console.log(weather)
    // setHTML('time-area', time.timeHTMLTemplate)
    setHTML('temperature', weather.weatherHTMLTemplate)
    console.log('drawing weather')
    
  }


async getTime(){
  try {
    await weatherService.getTime()
    console.log('got the time')
  } catch (error) {
    Pop.error(error)
    console.log(error)
  }


}
  drawTime(){
    
    const time = AppState.weather
    const newTime = time.formattedDT
    const timeElem = document.getElementById('time-area')
    timeElem.innerText = newTime
    
    // setHTML('time-area', newTime.timeHTMLTemplate)
  }


    

  






  


 


    






}