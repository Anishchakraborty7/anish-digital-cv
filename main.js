function toggleSection(el) {
  el.parentElement.classList.toggle("open");
}

document.getElementById("toggleTheme")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
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

