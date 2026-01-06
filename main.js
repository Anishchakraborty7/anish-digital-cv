function toggleSection(el) {
  el.parentElement.classList.toggle("open");
}

document.getElementById("toggleTheme")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
