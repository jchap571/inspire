export class Picture {
  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.largeImgUrl = data.largeImgUrl
    this.tags = data.tags
    this.author = data.author
    this.views = data.views
    this.downloads = data.downloads
    this.likes = data.likes
    this.userImageUrl = data.userImageUrl
    this.query = data.query



  }

  get heroPictureHTMLTemplate() {
    return /*html*/`
       <div class="container-fluid text-white">
          <p>Image taken by: ${this.author}</p>
          <img src="${this.largeImgUrl}" alt="">
        </div>

  `


  }














}


// const data(){
//   {
//     "url": "https://pixabay.com/get/g059c3fffea6b473602b92330ff1a4a5656cb709de6f6fb311e0b7aa3095e5c521998d8a83076e7b3f12214cf6821fc018b95163be7146027297f85a93ffdbc8f_640.jpg",
//     "imgUrl": "https://pixabay.com/get/g059c3fffea6b473602b92330ff1a4a5656cb709de6f6fb311e0b7aa3095e5c521998d8a83076e7b3f12214cf6821fc018b95163be7146027297f85a93ffdbc8f_640.jpg",
//     "largeImgUrl": "https://pixabay.com/get/gc141f594105a378d0ef1bf404994d533c8d3d5b4b08e9da1e30992cbcbbae770972f66c1f0b5c32cb8faf40bff3f7003939d5e663b7256e916d49c6ff0a3b1a7_1280.jpg",
//     "tags": "fireworks, baku, night",
//     "author": "faiknagiyev",
//     "views": 33508,
//     "downloads": 29520,
//     "likes": 49,
//     "userImageUrl": "https://cdn.pixabay.com/user/2019/11/14/19-49-23-5_250x250.jpg",
//     "query": "night"
//   }




// {
//   "url": "https://pixabay.com/get/g017baad5360058ae6b3bdd6b4e90c091d76d8769f0e7b73e326759aa793160f7ae21e407330b5ce57537d1cae86c9b6eb68e450af906bbea6ceea54ce5d0dcac_640.jpg",
//   "imgUrl": "https://pixabay.com/get/g017baad5360058ae6b3bdd6b4e90c091d76d8769f0e7b73e326759aa793160f7ae21e407330b5ce57537d1cae86c9b6eb68e450af906bbea6ceea54ce5d0dcac_640.jpg",
//   "largeImgUrl": "https://pixabay.com/get/g4beaee1b1c8cf20d48db810d6d4b151058c264f0de978e8670c51cb84c1b2609fd8579c6db13a997c2896a087027ca5f23139fd0bf9cea2660c8b4e5cafc8b86_1280.jpg",
//   "tags": "heaven, clouds, weather",
//   "author": "Peggychoucair",
//   "views": 6762,
//   "downloads": 5111,
//   "likes": 69,
//   "userImageUrl": "https://cdn.pixabay.com/user/2022/02/25/20-32-40-46_250x250.jpg",
//   "query": "rainbow"
// }