// import { AppState } from "../AppState.js";
// import { timeService } from "../services/TimeService.js";
// import { Pop } from "../utils/Pop.js";
// import { setHTML } from "../utils/Writer.js";



// export class TimeController{
//     constructor(){
//         console.log('time controller is loaded!')
//         AppState.on('time', this.getTime)
//         this.drawTime()
//     }



//     drawTime(){
//         const time = AppState.time
//         console.log(time)
//         setHTML('time-area', time.timeHTMLTemplate)
      
       
//       }



//       async getTime(){
//         try {
//           await timeService.getTime()
          
          
//           console.log()
//         } catch (error) {
//           Pop.error(error)
//           console.error(error)
//         }
    
//       }
     
     
       
        
         
         
     
    
// }