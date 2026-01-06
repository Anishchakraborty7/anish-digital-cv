function showSection(id) {
  document.querySelectorAll('.content-box').forEach(box => {
    box.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}
