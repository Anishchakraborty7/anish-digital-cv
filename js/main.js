function showSection(id) {
  document.querySelectorAll('.content-box').forEach(box => {
    box.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}
function openHireModal() {
  document.getElementById("hireModal").classList.add("active");
}

function closeHireModal() {
  document.getElementById("hireModal").classList.remove("active");
}

/* Close popup when clicking outside */
document.addEventListener("click", function (e) {
  const modal = document.getElementById("hireModal");
  if (e.target === modal) {
    closeHireModal();
  }
});

