function addImage(){
  for (i=0;i<9;i++){
    const image = document.createElement("img");
    const number = Math.random();
    image.src = `http://lorempixel.com.br/300/200/${number}`;

    gallery.appendChild(image);
      
  }
}

addImage()
