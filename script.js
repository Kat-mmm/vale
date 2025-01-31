// script.js
document.getElementById('yes-btn').addEventListener('click', function () {
    // Show the rose and message
    document.getElementById('rose-container').classList.remove('hidden');
    document.querySelector('.heart-container').classList.add('hidden');
    document.querySelector('.buttons').classList.add('hidden');
  
    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ff7eb3', '#ff758c', '#ff4d4d'],
    });
  
    // Add more confetti bursts for a festive effect
    setTimeout(() => confetti({ particleCount: 100, spread: 100, origin: { y: 0.6 } }), 500);
    setTimeout(() => confetti({ particleCount: 100, spread: 100, origin: { y: 0.6 } }), 1000);
  });
  
  document.getElementById('no-btn').addEventListener('click', function () {
    alert("Aww, please reconsider! 💖");
  });