const correctPassword = "rosie";

const badImages = [
  "images/IMG_6033.jpeg",
  "images/IMG_4725.jpeg",
  "images/IMG_5108.jpeg"
];

let noCount = 0;

function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase();
  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("valentine-screen").classList.remove("hidden");
  } else {
    document.getElementById("passwordError").textContent =
      "Hmm… that doesn’t sound right 🐾 Try again!";
  }
}

document.getElementById("yesBtn").onclick = () => {
  const img = document.getElementById("displayImage");
  img.src = "images/IMG_1576.jpeg";
  img.classList.remove("hidden");
  document.getElementById("errorMsg").textContent = "Yay!! I knew it 💖";
  launchFireworks();
};

document.getElementById("noBtn").onclick = (e) => {
  const img = document.getElementById("displayImage");
  img.src = badImages[noCount % badImages.length];
  img.classList.remove("hidden");
  document.getElementById("errorMsg").textContent =
    "Incorrect choice detected 🚨 Please reconsider.";

  noCount++;

  // Move button
  const btn = e.target;
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
};

function launchFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: Math.random() * 6 - 3,
      dy: Math.random() * 6 - 3,
      life: 100
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.fillStyle = "pink";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      p.life--;
    });
    particles = particles.filter(p => p.life > 0);
    if (particles.length) requestAnimationFrame(animate);
  }

  animate();
}
