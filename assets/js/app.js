// success section video
document.addEventListener("DOMContentLoaded", function () {
  const videoWrappers = document.querySelectorAll(".video-wrapper");
  let currentPlayingVideo = null;

  videoWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", function () {
      const videoId = this.getAttribute("data-video-id");
      const videoElement = document.getElementById(videoId);

      if (currentPlayingVideo && currentPlayingVideo !== videoElement) {
        currentPlayingVideo.pause();
        currentPlayingVideo.currentTime = 0;
        currentPlayingVideo.parentElement.querySelector(
          ".play-icon"
        ).style.display = "block";
      }

      if (videoElement.paused) {
        videoElement.play();
        this.querySelector(".play-icon").style.display = "none";
        currentPlayingVideo = videoElement;
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
        this.querySelector(".play-icon").style.display = "block";
        currentPlayingVideo = null;
      }
    });
  });
});

//  header-video
function playVideo(videoId, button) {
  const video = document.getElementById(videoId);
  video.play();
  button.style.display = "none";

  video.addEventListener("play", () => {
    video.controls = true;
  });

  video.addEventListener("pause", () => {
    video.controls = false;
    button.style.display = "block";
  });

  video.addEventListener("ended", () => {
    video.controls = false;
    button.style.display = "block";
  });
}

document.getElementById("playIcon").addEventListener("click", () => {
  playVideo("header-video", document.getElementById("playIcon"));
});

// particle js
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#162B59" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 9,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#162B59",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
});
