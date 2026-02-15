const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});

/* Auto close me8nu on link click (mobile) */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

// =========================
// Typed.js Animation
// =========================
var typed = new Typed(".typed-text", {
  strings: ["Web Developer", "Blogger", "YouTuber"],
  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 1500,
  loop: true,
});

// =========================
// Particle Background
// =========================
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

// Canvas Fullscreen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize Fix
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

let particlesArray = [];
const NUMBER_OF_PARTICLES = 120;

// Particle Class
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.weight = Math.random() * 1 + 0.5;
    this.color = "rgba(255,255,255,0.7)";
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.y += this.weight;
    this.x += Math.sin(this.y * 0.02);
    
    if (this.y > canvas.height + this.size) {
      this.y = -this.size;
      this.x = Math.random() * canvas.width;
      this.size = Math.random() * 2 + 1;
      this.weight = Math.random() * 1 + 0.5;
    }
  }
}

// Create Particles
function initParticles() {
  particlesArray = [];
  for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
    particlesArray.push(new Particle());
  }
}

// Animate
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animateParticles);
}

// FULL IMAGE MODAL
function openImageModal(imgSrc) {
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("imgModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
// Start
initParticles();
animateParticles();// Smooth scroll for top/bottom buttons
document.querySelectorAll('.scroll-buttons a').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const targetID = button.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if(targetSection){
      targetSection.scrollIntoView({behavior: 'smooth'});
    }
  });
});
// =========================
// Typed.js Animation
// =========================
var typed = new Typed(".typed-text", {
  strings: ["Front-End Developer", "Web Developer", "YouTuber"],
  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 1500,
  loop: true,
});


// FULL IMAGE MODAL
function openImageModal(imgSrc) {
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("imgModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

// Smooth scroll for top/bottom buttons
document.querySelectorAll('.scroll-buttons a').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const targetID = button.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if(targetSection){
      targetSection.scrollIntoView({behavior: 'smooth'});
    }
  });
});
