const burger = document.getElementById("burgerMenu");
const sideMenu = document.getElementById("sideMenu");
const backdrop = document.getElementById("backdrop");

// OPEN MENU
burger.addEventListener("click", () => {
  sideMenu.style.right = "0";
  backdrop.style.display = "block";
});

// CLOSE MENU WHEN CLICK OUTSIDE
backdrop.addEventListener("click", () => {
  sideMenu.style.right = "-250px";
  backdrop.style.display = "none";
});
