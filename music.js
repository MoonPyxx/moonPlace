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