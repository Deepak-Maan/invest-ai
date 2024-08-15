document.addEventListener("DOMContentLoaded", function () {
  const videoWrappers = document.querySelectorAll(".video-wrapper");
  const backgroundVideos = document.querySelectorAll(".background-video");
  let currentPlayingVideo = null;

  videoWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", function () {
      const videoId = this.getAttribute("data-video-id");
      const videoElement = document.getElementById(videoId);

      // Only pause and reset non-background videos
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

  function playVideo(videoElement, playIcon) {
    videoElement.play();
    playIcon.style.display = "none";

    videoElement.addEventListener("play", () => {
      videoElement.controls = true;
    });

    videoElement.addEventListener("pause", () => {
      videoElement.controls = false;
      playIcon.style.display = "block";
    });

    videoElement.addEventListener("ended", () => {
      videoElement.controls = false;
      playIcon.style.display = "block";
    });
  }

  document.getElementById("playIcon").addEventListener("click", () => {
    playVideo(
      document.getElementById("header-video"),
      document.getElementById("playIcon")
    );
  });

  // Ensure background videos keep running
  backgroundVideos.forEach((video) => {
    video.play();
  });
});
