// Bubbles background
const bubbleContainer = document.querySelector('.background-bubbles');

for (let i = 0; i < 30; i++) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.width = bubble.style.height = Math.random() * 40 + 20 + 'px';
  bubble.style.left = Math.random() * window.innerWidth + 'px';
  bubble.style.animationDuration = Math.random() * 5 + 5 + 's';
  bubbleContainer.appendChild(bubble);
}

// Bunga jatuh
const flowerContainer = document.createElement('div');
flowerContainer.className = 'falling-flowers';
document.body.appendChild(flowerContainer);

setInterval(() => {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.left = Math.random() * window.innerWidth + 'px';
  flowerContainer.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}, 500);

// Musik autoplay (dengan fallback klik pengguna)
window.addEventListener('load', () => {
  const music = document.getElementById('background-music');
  if (music) {
    music.muted = false;
    music.volume = 0;

    music.play().then(() => {
      let volume = 0;
      const fadeAudio = setInterval(() => {
        if (volume < 1) {
          volume += 0.02;
          music.volume = Math.min(volume, 1);
        } else {
          clearInterval(fadeAudio);
        }
      }, 100);
    }).catch(() => {
      // Kalau autoplay gagal, user bisa play saat klik tombol
    });
  }
});

// Tombol surprise → play musik juga (jaga-jaga autoplay ditolak)
document.querySelector(".surprise-btn").addEventListener("click", function() {
  const music = document.getElementById("background-music");
  if (music && music.paused) {
    music.play();
  }
  window.location.href = "surprise.html";
});
