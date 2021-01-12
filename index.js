var hoverSound = document.getElementById("audioClick");

var audioPlayPromise = hoverSound.play();

function playHoverSound() {
    hoverSound.volume = 0.1;
    if (audioPlayPromise !== undefined) {
        audioPlayPromise.then(_ => {
                hoverSound.play();
            })
            .catch(error => {
                hoverSound.pause();
            })
    }
}

function goToTop() {
    const goToTop = document.getElementById("goToTop")

    if (this.scrollY >= 560) {
        goToTop.classList.add("show-goToTop")
    }
}

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

var canvasInterior = document.getElementById("interior");
var image = new Image();
image.src = "images/interior.jpg";
var context = canvasInterior.getContext("2d");
var canvasWidth = document.getElementById("interior").style.width;
var canvasHeight = document.getElementById("interior").style.height;


window.onload = () => {
    goToTop();
    var vid = document.getElementById("burgers");
    var playPromise = vid.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
                vid.play();
            })
            .catch(error => {
                vid.pause();
            })
    }

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(image, 0, 0, 300, 200);

    // var navHeight = document.getElementsByTagName("nav")[0].style.height;
    // document.getElementsByClassName("banner")[0].style.marginTop = navHeight + "px";

}

window.addEventListener("scroll", goToTop)

// var videoBurgers = document.getElementById("burgers");

// function applyGradient() {
//     videoBurgers.style.filter = "    background-image: radial-gradient( circle at 50% 48%, rgba(11, 39, 65, 0.12) 84%, #000000)";
// }

// var orderBtn = document.getElementById("order");

// orderBtn.onClick(function() {
//     document.getElementsByTagName("path").addClass('animate_class_name');
// });

var vid = document.getElementById("burgers");

function goBlackWhite() {
    vid.style.filter = "grayscale(100%)";
}

function changeHue() {
    vid.style.filter = "hue-rotate(30deg) contrast(125%)";
}

function invert() {
    vid.style.filter = "invert(75%) blur(10px)";
}

function resetVid() {
    vid.style.filter = "none";
}

function initMap() {

    var options = {
        zoom: 14,
        center: { lat: 44.4163594, lng: 26.0455686 }
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position: { lat: 44.4163594, lng: 26.0455686 },
        map: map
    });

    var infoWindow = new google.maps.InfoWindow({
        content: "<h1>Burger Palace</h1>"
    });

    //doesn't work, maps API throws an error
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    var marker = {
        coords: { lat: 44.4163594, lng: 26.0455686 },
        content: '<h1>Burger Palace</h1>'
    };

}

var navitems = document.getElementsByClassName("navitem")