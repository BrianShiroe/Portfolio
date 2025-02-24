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
  const scrollAmount = 315; // Adjust scroll distance
  carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}