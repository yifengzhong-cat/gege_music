let backgroundMusic;

function initAudio() {
    backgroundMusic = new Audio('assets/music/cream.mp3');
    backgroundMusic.loop = true;

    const musicToggle = document.getElementById('music-toggle');
    musicToggle.addEventListener('click', toggleMusic);
}

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
}

// 确保音频在页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    initAudio();
}); 