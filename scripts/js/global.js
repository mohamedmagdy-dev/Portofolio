let pageHeight = document.querySelector("html").offsetHeight;

let mobileMenuBtn = document.querySelector(".mobile-menu");
let navigation = document.querySelector("nav");
mobileMenuBtn.addEventListener("click", () => {
  navigation.classList.toggle("show-me");
});

// Remove Show-me Class From Navigation When Click Any spot
document.onclick = function (e) {
  if (
    !e.target.classList.contains("fa-bars") &&
    !e.target.classList.contains("mobile-menu")
  ) {
    navigation.classList.remove("show-me");
  }
};

