var imgs = document.querySelectorAll("img.w-25");
var mainImg = document.querySelector("img.w-100");



// mainImg.addEventListener("click", function(){
//     console.log("hi");
// })
// console.log(imgs.length)


for(var i = 0 ; i < imgs.length ; i++){

    imgs[i].addEventListener("click", function(e){

        var imgSrc = e.target.getAttribute("src");

        mainImg.setAttribute("src",imgSrc);
         
    })
    
}