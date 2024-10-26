let pageHeight = document.querySelector("html").offsetHeight;
let mobileMenuBtn = document.querySelector(".mobile-menu");
let navigation = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-btn");


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


// Scroll Btn 

window.onscroll = () => {
  if (window.scrollY >= 500) {
    scrollBtn.style.cssText = `opacity: 1;pointer-events: all;`
  } else {
    scrollBtn.style.cssText = `opacity: 0;pointer-events: none;`
  }
}

scrollBtn.addEventListener("click" , _ => {
  window.scrollTo(0,0)
})
