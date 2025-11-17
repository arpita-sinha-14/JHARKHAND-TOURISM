const burger = document.getElementById("burgerMenu");
const sideMenu = document.getElementById("sideMenu");
const backdrop = document.getElementById("backdrop");

// Open sidebar
burger.addEventListener("click", () => {
  sideMenu.style.right = "0";
  backdrop.style.display = "block";
});

// Close sidebar when clicking outside
backdrop.addEventListener("click", () => {
  sideMenu.style.right = "-280px";
  backdrop.style.display = "none";
});
