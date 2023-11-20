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
// Detect language
window.onload = function() {
    var savedLang = localStorage.getItem('userLangPref');
    var userLang = navigator.language || navigator.userLanguage;
    if (!savedLang) {
        if (userLang.includes('es')) {
            localStorage.setItem('userLangPref', 'es');
            window.location.href = 'https://moonpyx.me/index_es.html';
        } else {
            localStorage.setItem('userLangPref', 'en');
            window.location.href = 'https://moonpyx.me';
        }
    } else {
        if (savedLang === 'es') {
            window.location.href = 'https://moonpyx.me/index_es.html';
        } else {
            window.location.href = 'https://moonpyx.me';
        }
    }
};
function changeLanguage(lang) {
    localStorage.setItem('userLangPref', lang);
    if (lang === 'es') {
        window.location.href = 'https://moonpyx.me/index_es.html';
    } else {
        window.location.href = 'https://moonpyx.me';
    }
}
