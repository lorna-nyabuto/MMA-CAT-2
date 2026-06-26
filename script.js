function toggleVideo() {
  const video = document.getElementById("wildlifeVideo");
  const btn   = document.getElementById("toggleBtn");

  const isHidden = video.classList.contains("hidden");

  if (isHidden) {
    // Video is hidden → show and play it
    video.classList.remove("hidden");
    video.play();
    btn.textContent  = "Hide Video";
    btn.setAttribute("aria-label", "Hide video");
  } else {
    // Video is visible → hide it (pause if playing)
    if (!video.paused) {
      video.pause();
    }
    video.classList.add("hidden");
    btn.textContent  = "Play Video";
    btn.setAttribute("aria-label", "Play video");
  }
}