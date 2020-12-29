/*global document, setInterval*/
var introduction = document.getElementsByClassName("introduction"),
    backgroundImages = ["../images/chanel.jpg", "../images/gucci.jpg", "../images/adidas.jpg", "../images/ralphlauren.jpg", "../images/nike.jpg"],
    index = 1;
//introduction[0].style.backgroundImage = "url(../images/nike.jpg)";

(function myFunction() {
    "use strict";
    setInterval(function () {
        if (index === backgroundImages.length) {
            index = 0;
        }
        
        introduction[0].style.backgroundImage = "url(" + backgroundImages[index] + ")";
        index += 1;
    }, 2000);
    
}());