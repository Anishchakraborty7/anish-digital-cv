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

function openProjectModal(title, description, tech, github, live) {
  document.getElementById("projectTitle").innerText = title;
  document.getElementById("projectDescription").innerText = description;
  document.getElementById("projectTech").innerText = tech;

  const githubLink = document.getElementById("projectGithub");
  const liveLink = document.getElementById("projectLive");

  githubLink.href = github;
  githubLink.style.display = github ? "inline-block" : "none";

  liveLink.href = live;
  liveLink.style.display = live ? "inline-block" : "none";

  document.getElementById("projectModal").classList.add("active");
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("active");
}

/* Close when clicking outside */
document.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeProjectModal();
  }
});
function openCertModal(title, imagePath) {
  document.getElementById("certTitle").innerText = title;
  document.getElementById("certImage").src = imagePath;
  document.getElementById("certModal").classList.add("active");
}

function closeCertModal() {
  document.getElementById("certModal").classList.remove("active");
}

/* Close when clicking outside */
document.addEventListener("click", function (e) {
  const modal = document.getElementById("certModal");
  if (e.target === modal) {
    closeCertModal();
  }
});
