
const getRequestButton = document.getElementById('getRequestButton');
const loadingScreen = document.getElementById('loadingScreen');

function turnOn() {
    console.log('hello');
    loadingScreen.style.display = 'flex';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://script.google.com/macros/s/AKfycbx1ZiwqqLW6afLmRnGfHQqhgYPr3R2Yh063EIO3AtmFOrLL6Vx9Ok5Jc9yChtuxrV3u/exec?cmd=write&&cell=A1&&value=1', true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Response:', xhr.responseText);
            loadingScreen.style.display = 'none';
            document.getElementById('myImage').src = 'assets/pump.gif';
        } else {
            console.error('Request failed with status:', xhr.status);
        }
    };
    xhr.send();
}
function turnOff() {
    console.log('hello');
    // loadingScreen.style.display = 'flex';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://script.google.com/macros/s/AKfycbx1ZiwqqLW6afLmRnGfHQqhgYPr3R2Yh063EIO3AtmFOrLL6Vx9Ok5Jc9yChtuxrV3u/exec?cmd=write&&cell=A1&&value=0', true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Response:', xhr.responseText);
            // loadingScreen.style.display = 'none';
            document.getElementById('myImage').src = 'assets/stop2.png';
        } else {
            console.error('Request failed with status:', xhr.status);
        }
    };
    xhr.send();
}


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
