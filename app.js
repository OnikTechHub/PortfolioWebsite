// =========================
// Mobile Menu Toggle
// =========================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});

// Close menu when link clicked (mobile)
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
  strings: ["Front-End Developer", "Web Developer", "YouTuber"],
  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 1500,
  loop: true,
});

// =========================
// Particle Background
// =========================
const canvas = document.createElement("canvas");
canvas.id = "particle-canvas";
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-2";
canvas.style.pointerEvents = "none";

const ctx = canvas.getContext("2d");

// Set Canvas Size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Particle Class
class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.weight = Math.random() * 1 + 0.5;
    this.color = "rgba(255,255,255,0.7)";
  }

  update() {
    this.y += this.weight;
    this.x += Math.sin(this.y * 0.02);

    if (this.y > canvas.height + this.size) this.reset();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Create Particles
let particlesArray = [];
const NUMBER_OF_PARTICLES = 120;

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
    particlesArray.push(new Particle());
  }
}

// Animate Particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// =========================
// Image Modal
// =========================
function openImageModal(imgSrc) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = imgSrc;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("imgModal");
  modal.style.display = "none";
}

// Close modal on click outside image
document.getElementById("imgModal").addEventListener("click", closeModal);

// =========================
// Smooth Scroll for Scroll Buttons
// =========================
document.querySelectorAll(".scroll-buttons a").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    const targetID = button.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});



    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // যখন সেকশনে ঢুকবেন তখন ক্লাস যোগ হবে
                entry.target.classList.add('show-animation');
            } else {
                // যখন সেকশন থেকে বের হয়ে যাবেন তখন ক্লাস রিমুভ হবে (যাতে আবার ফিরে আসলে অ্যানিমেশন হয়)
                entry.target.classList.remove('show-animation');
            }
        });
    }, { threshold: 0.2 }); // সেকশনের ২০% দেখা গেলেই শুরু হবে

    const educationItems = document.querySelectorAll('.education-item, .timeline-line');
    educationItems.forEach((el) => observer.observe(el));
