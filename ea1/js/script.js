const DIRECTION = {LEFT: "left", RIGHT: "right"};
const ANGLESTEP = 5;

var angle = 0;
var autoRotate = true;
var direction  = DIRECTION.LEFT;
var firePos = 0;

window.onload = function () {

    cacheImages();
    updateImgElement();

    setInterval(function () {
        if (autoRotate) rotateImage(direction);
    }, 130);

    document.getElementsByTagName("div")[0].style.visibility = "visible";
    document.getElementsByTagName("div")[1].style.visibility = "visible";
    animateFire();

};


window.onkeydown = function (evt) {

    switch (evt.code) {
        case ('KeyR'):
            // console.log("rechts");
            direction = DIRECTION.RIGHT;
            rotateImage(direction);
            break;
        case ('KeyL'):
            // console.log("links");
            direction = DIRECTION.LEFT;
            rotateImage(direction);
            break;
        case ('Space'):
            autoRotate = !autoRotate;
    }

};

/**
 * method for caching images
 */
function cacheImages() {

    for (i = 0; i < 360; i += ANGLESTEP) {
        let img = new Image();
        img.src = "img/spirale" + i +".png";
    }
}

function rotateImage(direction){

    switch (direction) {
        case (DIRECTION.RIGHT):
            angle = (angle + ANGLESTEP) < 360 ? angle += ANGLESTEP : 0;
            // console.log("Angle: " + angle);
            break;
        case  (DIRECTION.LEFT):
            angle = (angle - ANGLESTEP) >= 0 ? angle -= ANGLESTEP : 360 - ANGLESTEP;
            // console.log("Angle: " + angle);
            break;
    }
    updateImgElement();
}

function updateImgElement() {

    let imgHeight = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
    let img = document.getElementById("spiraleImage");
    img.width = imgHeight;
    img.height = imgHeight;

    img.src = "img/spirale" + angle +".png";
}

function animateFire() {
    setInterval(function () {
        let img = document.getElementById("feuerImage");
        img.src = "img/feuer" + firePos++ +".png";
        if(firePos === 18) firePos = 0;
    }, 150);
}