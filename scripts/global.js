let mobileMenuBtn = document.querySelector(".mobile-menu");
let navigation = document.querySelector("nav");
mobileMenuBtn.addEventListener("click", () => {
  navigation.classList.toggle("show-me");
});

// Remove Show-me Class From Navigation When Click Any spot
document.onclick = function (e) {
  console.log(e.target);
  if (
    !e.target.classList.contains("fa-bars") &&
    !e.target.classList.contains("mobile-menu")
  ) {
    navigation.classList.remove("show-me");
  }
};
