// Start Works Filter
let worksCategory = document.querySelectorAll(".work-filter button");
let projectsContainer = document.querySelector(".projects");
let projects = document.querySelectorAll(".projects .all");



worksCategory.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove All Active Class From All Button
    worksCategory.forEach((button) => {
      button.classList.remove("active");
    });
    // Add Active Class To Clicked Button
    this.classList.add("active");
    // Show Filtered Projects
    filterProject(this.classList[0]);
  });
});

function filterProject(filterClass) {
  projects.forEach((project) => {
    if (!project.classList.contains(filterClass)) {
      project.style.display = "none";
    } else {
      project.style.display = "block";
    }
  });
}
