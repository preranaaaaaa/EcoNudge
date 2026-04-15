let totalPoints = 0;

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function addPoints(p) {
  totalPoints += p;
  document.getElementById("points").innerText = totalPoints;
  alert("Challenge accepted! +" + p + " points 🌟");
}
