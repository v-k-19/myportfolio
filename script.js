console.log("Portfolio site loaded successfully.");

// Highlight active navigation button
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-inside a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-nav");
    }
  });

  // Scroll animation observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-button');
  const content = document.getElementById('content');

  toggleButton.addEventListener('click', function() {
    // Toggle the 'visible' class on the content
    content.classList.toggle('visible');

    // Toggle the 'arrow-up' class on the button
    toggleButton.classList.toggle('arrow-up');
  });
});