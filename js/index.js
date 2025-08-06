/* Copy to clipboad on click */

document
  .getElementById("copy-email-btn")
  .addEventListener("click", function () {
    const email = "mothbreather.wav@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        const msg = document.getElementById("copy-message");
        msg.style.display = "inline";
        setTimeout(() => {
          msg.style.display = "none";
        }, 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  });

/* Particles JS */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "triangle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 10,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2.5,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 60, // Smaller repulse radius
        duration: 0.3,
      },
      push: {
        particles_nb: 2, // Fewer particles on click
      },
    },
  },
  retina_detect: true,
});
