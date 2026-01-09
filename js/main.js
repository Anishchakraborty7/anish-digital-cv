function showSection(id) {
  const boxes = document.querySelectorAll(".content-box");
  const buttons = document.querySelectorAll(".nav-buttons button");

  boxes.forEach(box => box.classList.remove("active"));
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  // highlight active button
  buttons.forEach(btn => {
    if (btn.getAttribute("onclick")?.includes(id)) {
      btn.classList.add("active");
    }
  });
}

/* ===== HIRE MODAL ===== */

function openHireModal() {
  document.getElementById("hireModal").classList.add("active");
}

function closeHireModal() {
  document.getElementById("hireModal").classList.remove("active");
}

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
function openCertModalByIndex(index) {
  currentCertIndex = index;

  document.getElementById("certTitle").innerText =
    certificates[currentCertIndex].title;

  document.getElementById("certImage").src =
    certificates[currentCertIndex].image;

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
/* ===== CERTIFICATE SLIDER DATA ===== */
const certificates = [
  {
    title: "Artificial Intelligence & Machine Learning",
    image: "assets/cert-ai-ml.jpg"
  },
  {
    title: "Foundation of Data Science",
    image: "assets/cert-data-science.jpg"
  }
];

let currentCertIndex = 0;
function nextCert() {
  currentCertIndex =
    (currentCertIndex + 1) % certificates.length;
  openCertModalByIndex(currentCertIndex);
}

function prevCert() {
  currentCertIndex =
    (currentCertIndex - 1 + certificates.length) % certificates.length;
  openCertModalByIndex(currentCertIndex);
}
let startX = 0;

const certImage = document.getElementById("certImage");

certImage.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

certImage.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50) nextCert();      // swipe left
  else if (diff < -50) prevCert(); // swipe right
});
document.addEventListener("keydown", e => {
  if (!document.getElementById("certModal").classList.contains("active")) return;

  if (e.key === "ArrowRight") nextCert();
  if (e.key === "ArrowLeft") prevCert();
  if (e.key === "Escape") closeCertModal();
});
