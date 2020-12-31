/*global document, setInterval, console*/

/* Start the introduction automatic background image change*/
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

/* End the introduction automatic background image change*/


/* Start the Search Filter*/
var search = "", text = "";
function filter(e) {
    "use strict";
    document.getElementsByClassName('searchSection')[0].style.display = 'block';
    search = e.value.toLowerCase();
    console.log(e.value);
    document.querySelectorAll('.contsearch').forEach(function (row) {
        text = row.innerText.toLowerCase();
        if (text.match(search)) {
            row.style.display = "block";
        } else {
            row.style.display = "none";
        }
    });
}

function hideList() {
    "use strict";
    document.getElementsByClassName('contsearch').style.display = 'none';
}

function finishedSearching() {
     "use strict";
      document.getElementsByClassName('searchSection')[0].style.display = 'none';
}
/* End the Search Filter*/