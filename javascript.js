document.addEventListener('DOMContentLoaded', function () {
  // Trigger animation once when element is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Unobserve after animation triggers once
        }
      });
    },
    { threshold: 0.35 } // Trigger when 35% of the element is visible
  );

  document.querySelectorAll('.animated').forEach((element) => {
    observer.observe(element);
  });

  // Disable behavior for visually disabled <a> tags
  document.querySelectorAll('a[disabled], a[style*="not-allowed"]').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('This link is disabled and cannot be clicked.');
    });
  });

  // Adjust scroll position by 20px when clicking on links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      const targetId = link.getAttribute('href').slice(1); // Get the ID of the target section
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 10, // Scroll to the target position minus 20px
          behavior: 'smooth' // Smooth scrolling effect
        });
      }
    });
  });
});
