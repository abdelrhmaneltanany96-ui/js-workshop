var imgs = document.querySelectorAll("img.w-25");
var mainImg = document.querySelector("img.w-100");





for (var i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener("click", function (e) {

        var imgSrc = e.target.getAttribute("src");

        mainImg.setAttribute("src", imgSrc);

    })

}















// e.pageY and e.pageX are properties of the MouseEvent object that represent the vertical and horizontal coordinates
//  of the mouse pointer relative to the entire document,
//  respectively.They are used to determine the position of the mouse pointer on the page when a mouse event occurs,
//  such as a click or mouse movement.



// but e.clientX and e.clientY are properties of the MouseEvent object that represent the horizontal and vertical coordinates
//  of the mouse pointer relative to the viewport (the visible area of the web page), respectively.
//  They are used to determine the position of the mouse pointer within the visible area of the page when a mouse event occurs,
//  such as a click or mouse movement.



//offestX and offsetY are properties of the MouseEvent object that represent the horizontal and vertical coordinates
//  of the mouse pointer relative to the target element that triggered the event, respectively.
//  They are used to determine the position of the mouse pointer within the target element when a mouse event occurs,
//  such as a click or mouse movement.



let mouseChangeImg = document.querySelector("#mouseChangeImg");

document.addEventListener("mousemove", function (e) {
    mouseChangeImg.style.top = e.pageY + "px";
    mouseChangeImg.style.left = e.pageX + "px";
})

//here we are using the mouseleave event to hide the image when the mouse leaves the document area,
// and the mouseenter event to show the image when the mouse enters the document area.

document.addEventListener("mouseleave", function () {
    mouseChangeImg.style.display = "none";
});

document.addEventListener("mouseenter", function () {
    mouseChangeImg.style.display = "block";
});