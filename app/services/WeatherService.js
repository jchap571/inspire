import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    
    const response = await api.get('api/weather')
    console.log('got the weather', response.data)
    
    const newWeather = new Weather(response.data)
    AppState.weather = newWeather
    const newFWeather = newWeather

  }




}







export const weatherService = new WeatherService()