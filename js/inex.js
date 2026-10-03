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



// let mouseChangeImg = document.querySelector("#mouseChangeImg");

// document.addEventListener("mousemove", function (e) {
//     mouseChangeImg.style.top = e.pageY + "px";
//     mouseChangeImg.style.left = e.pageX + "px";
// })

// //here we are using the mouseleave event to hide the image when the mouse leaves the document area,
// // and the mouseenter event to show the image when the mouse enters the document area.

// document.addEventListener("mouseleave", function () {
//     mouseChangeImg.style.display = "none";
// });

// document.addEventListener("mouseenter", function () {
//     mouseChangeImg.style.display = "block";
// });














let itemsList =Array.from(document.querySelectorAll(".item img"));
let lightboxContainer = document.querySelector(".lightbox-container");
let closeBtn = document.querySelector("#closeBtn");
let lightboxImg = document.querySelector(".lightbox-img");
let currentIndex = -1;
let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");

if(itemsList.length > 0) {
    for (let item of itemsList) {
        item.addEventListener("click", function (e) {
            lightboxContainer.classList.replace("d-none", "d-flex");
            lightboxImg.style.backgroundImage = `url(${item.getAttribute("src")})`;
            currentIndex = itemsList.indexOf(item);
        })
}
}


closeBtn.addEventListener("click", function () {
    lightboxContainer.classList.replace("d-flex", "d-none");
});


document.addEventListener("keydown", function (e) {
    if (e.code == "ArrowRight") {
        nextBtn.click();
    } else if (e.code == "ArrowLeft") {
        prevBtn.click();
    }else if (e.code == "Escape") {
        closeBtn.click();
    }
});

lightboxContainer.addEventListener("click", function (e) {
       if (e.target == e.currentTarget) {
        closeBtn.click();
    }
});

// lightboxImg.addEventListener("click", function (e) {
//     e.stopPropagation();
// });

prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = itemsList.length - 1;
    }
    lightboxImg.style.backgroundImage = `url(${itemsList[currentIndex].getAttribute("src")})`;
});

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= itemsList.length) {
        currentIndex = 0;
    }
    lightboxImg.style.backgroundImage = `url(${itemsList[currentIndex].getAttribute("src")})`;
});
