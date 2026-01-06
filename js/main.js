const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-box');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active state from buttons
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));

    // Show target section
    const target = btn.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});
