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
function getCurrentPageLanguage() {
    return window.location.href.includes('index_es.html') ? 'es' : 'en';
}

window.onload = function() {
    var savedLang = localStorage.getItem('userLangPref');
    var userLang = navigator.language || navigator.userLanguage;
    var currentPageLang = getCurrentPageLanguage();

    if (!savedLang) {
        var preferredLang = userLang.includes('es') ? 'es' : 'en';
        localStorage.setItem('userLangPref', preferredLang);

        if (currentPageLang !== preferredLang) {
            window.location.href = preferredLang === 'es' ? 'https://moonpyx.me/index_es.html' : 'https://moonpyx.me';
        }
    } else if (currentPageLang !== savedLang) {
        window.location.href = savedLang === 'es' ? 'https://moonpyx.me/index_es.html' : 'https://moonpyx.me';
    }
};

function changeLanguage(lang) {
    var currentPageLang = getCurrentPageLanguage();
    if (currentPageLang !== lang) {
        localStorage.setItem('userLangPref', lang);
        window.location.href = lang === 'es' ? 'https://moonpyx.me/index_es.html' : 'https://moonpyx.me';
    }
}