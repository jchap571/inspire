export class Quote {
  constructor(data) {
    this.quote = data.quote || data.content
    this.body = data.body
    this.author = data.author
    this.authorSlug = data.authorSlug
    this.tags = data.tags
    this.description = this.description
    this.dateAdded = data.dateAdded
    this.dateModified = data.dateModified

  }


  get quotesHTMLTemplate() {
    return `
  <div class="magic-text d-flex">
    <div class="d-flex justify-content-center align-items-end w-100">
      <div class=" col-12 col-md-8 justify-content-center opacity-25">
          <div class="text-center d-flex"
            <p>"${this.quote}"</p>
          </div>  
          <div class="text-end secret-text "
            <p class="text-end">-${this.author}</p>
          </div>
       </div>
    </div>        
  </div>  
         
    
    `


  }





}

// {
//   "_id": "McFK9Gq3OjO0",
//   "content": "When in doubt, tell the truth.",
//   "author": "Mark Twain",
//   "tags": [
//       "Famous Quotes"
//   ],
//   "authorSlug": "mark-twain",
//   "length": 30,
//   "dateAdded": "2020-01-15",
//   "dateModified": "2023-04-14"
// }

// cosnt data{

//   {
//     "quote": {
//       "body": {
//         "maxLength": 500
//       },
//       "author": {
//         "maxLength": 500
//       },
//       "tags": [
//         {
//           "maxLength": 500
//         }
//       ]
//     },
//     "description": {
//       "type": "String",
//       "required": true
//     }
//   }
