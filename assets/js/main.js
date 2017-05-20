var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var contenido = document.getElementById("todas-img");
pictures.forEach(function(e){
var newImage = document.createElement("img");
newImage.setAttribute("class", "image");
newImage.setAttribute("src", e);
contenido.appendChild(newImage);

})


