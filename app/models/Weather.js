import { AppState } from "../AppState.js";


export class Weather {
  constructor(data) {
    this.name = data.name;
    this.temp = data.main.temp;
    this.weather = data.weather;
    this.dateTime = data.dt
    this.formattedDT = new Date(this.dateTime * 1000).toLocaleTimeString()

    

    

  }

 



  get weatherHTMLTemplate() {
    return `
    
    <h4>${this.temp}</h4>
    `
    
            

  }



  get timeHTMLTemplate(){
    return `
    <p>${this.formattedDT}</p>
    `
}    


}


// const data:  "coord": {

    
//   "weather": {
//       "0": {
//           "id": 800,
//           "main": "Clear",
//           "description": "clear sky",
//           "icon": "01d"
//       },
//       "icon": "https://openweathermap.org/img/wn/01d.png"
//   },
//   "base": "stations",
//   "main": {
//       "temp": 307.05,
//       "feels_like": 305.2,
//       "temp_min": 305.38,
//       "temp_max": 308.16,
//       "pressure": 1015,
//       "humidity": 22,
//       "sea_level": 1015,
//       "grnd_level": 905
//   },
//   "visibility": 10000,
//   "wind": {
//       "speed": 3.09,
//       "deg": 20
//   },
//   "clouds": {
//       "all": 0
//   },
//   "dt": 1725657937,
//   "sys": {
//       "type": 2,
//       "id": 2043419,
//       "country": "US",
//       "sunrise": 1725628495,
//       "sunset": 1725675085
//   },
//   "timezone": -21600,
//   "id": 5586437,
//   "name": "Boise",
//   "cod": 200,
//   "origin": "https://openweathermap.org"
// }


// // {
// //   "name": {
// //     "type": "String"
// //   },
// //   "main": {
// //     "temp": {
// //       "type": "Number"
// //     }
// //   },
// //   "weather": [
// //     {
// //       "description": {
// //         "type": "String"
// //       }
// //     }
// //   ]
