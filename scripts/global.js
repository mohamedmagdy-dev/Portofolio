let mobileMenuBtn = document.querySelector(".mobile-menu");
let navigation = document.querySelector("nav");
mobileMenuBtn.addEventListener("click",()=> {
  navigation.classList.toggle("show-me")
})