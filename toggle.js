document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const sidebarContent = document.getElementById('sidebar-content');

  if (toggleBtn && sidebarContent) {
    toggleBtn.addEventListener('click', () => {
      // Toggle the 'visible' class on the content
      sidebarContent.classList.toggle('visible');

      // Toggle the 'active' class on the button for the arrow rotation
      toggleBtn.classList.toggle('active');
    });
  }
});