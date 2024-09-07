import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { quotesService } from "../services/QuotesService.js";

export class QuotesController {
  constructor() {
    console.log('quotes controller is loaded')
    this.getQuotes()
    AppState.on('quote', this.drawQuote)
  }




  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }

  drawQuote() {
    const quote = AppState.quote
    setHTML('hero-info', quote.quotesHTMLTemplate)

  }

}



