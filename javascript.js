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
  
// image carousel navigation
function scrollCarousel(direction) {
  const carousel = document.querySelector(".carousel");
  const scrollAmount = 330; // Adjust scroll distance
  carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

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