import { AppState } from "../AppState.js";

import { Picture } from "../models/Picture.js";
import { api } from "./AxiosService.js";


class PictureService {
  async getPictures() {
    const response = await api.get('api/images')
    console.log('got pictures', response.data)

    const newPicture = new Picture(response.data)
    AppState.picture = newPicture

  }



}





export const pictureService = new PictureService()