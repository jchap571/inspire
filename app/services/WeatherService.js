import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    
    const response = await api.get('api/weather')
    console.log('got the weather', response.data)
    
    const newWeather = new Weather(response.data)
    AppState.weather  = newWeather
    
    

  }

async  toggleDegrees(){
    const temp = AppState.weather.temp
    const format = AppState.weather.tempFormat
    let newTemp = 0
    let newFormat = ''

    if (format == "c") {
     newTemp = ((parseFloat(temp) *9/5) +32)
     newFormat = "f"
      
      
    }
    else{
     newTemp = ((parseFloat(temp))-32) * 5/9
     newFormat = 'c'

    }

    AppState.weather.temp = newTemp.toString()
    AppState.weather.tempFormat = newFormat
  
  



}



}



export const weatherService = new WeatherService()