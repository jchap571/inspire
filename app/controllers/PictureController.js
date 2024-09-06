import { AppState } from "../AppState.js"
import { pictureService } from "../services/PictureService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"
import { Picture } from "../models/Picture.js"



export class PictureController {
  constructor() {
    console.log('picture controller is loaded!')
    this.getPictures()
    AppState.on('picture', this.drawHeroPicture)
  }



  async getPictures() {
    try {
      await pictureService.getPictures()
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }

  drawHeroPicture() {
    const picture = AppState.picture
    // setHTML('hero-picture', picture.heroPictureHTMLTemplate)

    document.body.style.backgroundImage = `url(${picture.largeImgUrl})`

  }







}