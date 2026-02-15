// ==========================
// Particles.js Configuration
// ==========================
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00eaff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00eaff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.6
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// ==========================
// Canvas Resize (Optional fallback)
// ==========================
function resizeParticlesCanvas() {
  const particlesContainer = document.getElementById("particles-js");
  if(particlesContainer){
    particlesContainer.style.width = window.innerWidth + "px";
    particlesContainer.style.height = window.innerHeight + "px";
  }
}
resizeParticlesCanvas();
window.addEventListener("resize", resizeParticlesCanvas);
