const images = [
    'pic-1.jpg',
    'pic-2.jpg',
    'pic-3.jpg'
]
let indexImage = 0;
const getImages = document.getElementById('get-images');

setInterval(()=>{
    if(indexImage>=images.length){
        indexImage = 0;
    }
    const imgUrl = images[indexImage]
    getImages.setAttribute ('src',imgUrl)
    indexImage++;
  
},1000)
