// Select Page
document.querySelector('.navbar_select').addEventListener('change', function() {
  const url = this.value;
  if (url) {
    // If the option is LinkedIn or YouTube, open in a new tab
    if (url.includes("linkedin.com") || url.includes("youtube.com")) {
      window.open(url, "_blank");
    } else {
      // Otherwise, open in same tab
      window.open(url, "_self");
    }
  }
});

//
document.addEventListener("DOMContentLoaded", () => {
  const tracks = document.querySelectorAll(".gallery-track");
  const speed = 0.5; // pixels per frame, same for all

  tracks.forEach((track, index) => {
    // Duplicate children for seamless loop
    track.innerHTML += track.innerHTML;

    let scrollPos = track.scrollHeight / 2;

    function smoothScroll() {
      const maxScroll = track.scrollHeight / 2;

      // Column 0 (left): top → bottom
      // Column 1 (right): bottom → top
      scrollPos += (index % 2 === 0 ? -speed : speed);

      if (scrollPos <= 0) {
        scrollPos = maxScroll;
      } else if (scrollPos >= maxScroll) {
        scrollPos = 0;
      }

      track.style.transform = `translateY(-${scrollPos}px)`;
      requestAnimationFrame(smoothScroll);
    }

    smoothScroll();
  });
});