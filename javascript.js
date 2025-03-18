// Makes the animation trggers when visible, but only once.
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.35 } // Trigger when 35% of the element is visible
    );
  
    document.querySelectorAll(".animated").forEach((element) => {
      observer.observe(element);
    });
  });

// educ-eye animation
function updatePupils(x, y) {
  document.querySelectorAll(".eye").forEach(eye => {
      let pupil = eye.querySelector(".pupil");
      let eyeRect = eye.getBoundingClientRect();
      let eyeCenterX = eyeRect.left + eyeRect.width / 2;
      let eyeCenterY = eyeRect.top + eyeRect.height / 2;
      let deltaX = x - eyeCenterX;
      let deltaY = y - eyeCenterY;
      let angle = Math.atan2(deltaY, deltaX);
      let distance = Math.min(eyeRect.width / 4, Math.hypot(deltaX, deltaY));
      pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
  });
}
document.addEventListener("mousemove", (event) => {
  updatePupils(event.clientX, event.clientY);
});
document.addEventListener("touchmove", (event) => {
  if (event.touches.length > 0) {
      updatePupils(event.touches[0].clientX, event.touches[0].clientY);
  }
}, { passive: true });

// Personal Project Auto Hovering
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".personal-projects-container > div");
  let index = 0;
  let interval;
  let isPaused = false;
  let firstHover = true;

  function hoverNext() {
    if (isPaused) return;

    projects.forEach((project) => project.classList.remove("hover-active"));
    projects[index].classList.add("hover-active");

    index = (index + 1) % projects.length;
  }

  function startAutoHover() {
    if (firstHover) {
      hoverNext(); // Immediately hover first project
      firstHover = false;
    }
    interval = setInterval(hoverNext, 5000);
  }

  function stopAutoHover() {
    clearInterval(interval);
  }

  projects.forEach((project) => {
    project.addEventListener("mouseenter", function () {
      isPaused = true;
      stopAutoHover();
      projects.forEach((p) => p.classList.remove("hover-active"));
    });

    project.addEventListener("mouseleave", function () {
      isPaused = false;
      startAutoHover();
    });
  });

  startAutoHover();
});

