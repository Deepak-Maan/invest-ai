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
