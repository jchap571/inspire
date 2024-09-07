import { AppState } from "../AppState.js";
import { Quote } from "../models/Quotes.js";
import { api } from "./AxiosService.js";




class QuotesService {

  async getQuotes() {
    const response = await api.get('api/quotes')
    console.log('got quotes')

    const newQuote = new Quote(response.data)
    AppState.quote = newQuote
  }


}



export const quotesService = new QuotesService()