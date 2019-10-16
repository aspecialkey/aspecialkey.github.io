const DIRECTION = {LEFT: "left", RIGHT: "right"};
const ANGLESTEP = 10;

var angle = 0;
var autoRotate = true;
var direction  = DIRECTION.LEFT;
var firePos = 0;

window.onload = function () {


    cacheImages();

    setInterval(function () {
        if (autoRotate) rotateImage(direction);
    }, 200);

    animateFire();

};


window.onkeydown = function (evt) {

    console.log("Key: "+  evt.code);
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
            autoRotate = autoRotate ? false : true;
    }


};

/**
 * method for caching images
 */
function cacheImages() {

    for (i = 0; i < 360; i += ANGLESTEP) {
        let img = new Image();
        img.src = "/ea1/img/spirale" + i +".png";
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
    img.height =imgHeight;

    img.src = "/ea1/img/spirale" + angle +".png";
}

function animateFire() {
    setInterval(function () {
        let img = document.getElementById("feuerImage");
        img.src = "/ea1/img/feuer" + firePos++ +".png";
        if(firePos == 18) firePos = 0;

    }, 150);
}