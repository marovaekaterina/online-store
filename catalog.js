const images = [
    "images/slider-images/img-1.png",
    "images/slider-images/img-2.png",
    "images/slider-images/img-3.png",
];

let index = 0;

function prevButton() {
    index++;

    if(index >= images.length) {
        index = 0;
    }

    document.getElementById("slide").src = images[index];
}

function nextButton() {
    index--;

    if(index < 0) {
        index = images.length - 1;
    }

    document.getElementById("slide").src = images[index];
}