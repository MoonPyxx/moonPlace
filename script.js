// Music
const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const volumeSlider = document.getElementById("volume-slider");

musicToggle.addEventListener("change", function() {
    if (musicToggle.checked) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
});

volumeSlider.addEventListener("input", function() {
    bgMusic.volume = volumeSlider.value;
});
// Duolingo counter
document.addEventListener("DOMContentLoaded", function() {
    var startDate = new Date("2023-08-17");
    var currentDate = new Date();

    var timeDifference = currentDate - startDate;
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("daysCounter").textContent = daysDifference;
});

/* Display topster*/

var toggleText = document.getElementById("toggleTopster");
var albumsContainer = document.getElementById("topAlbumsContainer");

toggleText.onclick = function() {
    if(albumsContainer.style.display === "none" || albumsContainer.style.display === "") {
        albumsContainer.style.display = "block";
    } else {
        albumsContainer.style.display = "none";
    }
}