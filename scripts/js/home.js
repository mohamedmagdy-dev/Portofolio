let articles = fetch("../../assets/data/articles.json").then((articles) =>
  articles.json()
);
let projectsApi = fetch("../../assets/data/projects.json").then((articles) =>
  articles.json()
);

let worksCategory = document.querySelectorAll(".work-filter button");
let projectsContainer = document.querySelector(".projects");
let articlesContainer = document.querySelector(".blogs .container");

// Show Last 3 Articles Added

articles.then((articlesData) => {
  let lastThreeArticles = [
    articlesData[articlesData.length - 1],
    articlesData[articlesData.length - 2],
    articlesData[articlesData.length - 3],
  ];
  lastThreeArticles.forEach((article) => {
    let recentArticle = document.createElement("div");
    recentArticle.classList.add("blog");

    recentArticle.title = article.title;

    let articleLink = document.createElement("a");
    articleLink.href = article.filename;

    let articleImg = document.createElement("img");
    articleImg.src = article.image;
    articleImg.alt = article.title;
    articleImg.title = article.title;

    let articleCategory = document.createElement("span");
    articleCategory.classList.add("category");
    articleCategory.innerText = article.category;

    let articleInfo = document.createElement("div");
    articleInfo.classList.add("blog-info");

    let articleDate = document.createElement("span");
    articleDate.classList.add("date");

    articleDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${article.date}`;
    let articleTitle = document.createElement("h3");

    let articleTitleContent = document.createTextNode(article.title);
    articleTitle.appendChild(articleTitleContent);

    articleInfo.appendChild(articleDate);
    articleInfo.appendChild(articleTitle);

    articleLink.appendChild(articleImg);

    articleLink.appendChild(articleCategory);
    articleLink.appendChild(articleInfo);

    recentArticle.appendChild(articleLink);

    articlesContainer.appendChild(recentArticle);
  });
});

// Show Projects From Json File
projectsApi.then((projects) => {
  projects.forEach((project) => {
    let projectStructure = document.createElement("div");
    projectStructure.classList.add("all");
    projectStructure.classList.add(project.category);

    let projectImg = document.createElement("img");
    projectImg.src = project.image;
    projectImg.alt = project.title;
    projectImg.title = project.title;

    let projectLink = document.createElement("a");
    projectLink.href = project.filename;

    let projectInfo = document.createElement("div");
    projectInfo.classList.add("fly-info");

    let projectTitle = document.createElement("h3");
    projectTitle.innerText = project.title;

    let projectContent = document.createElement("p");
    projectContent.innerText = project.short_content;

    let projectIcon = document.createElement("i");
    projectIcon.classList.add("fa-solid");
    projectIcon.classList.add("fa-arrow-right");

    projectInfo.appendChild(projectTitle);
    projectInfo.appendChild(projectContent);
    projectInfo.appendChild(projectIcon);

    projectLink.appendChild(projectInfo);

    projectStructure.appendChild(projectImg);
    projectStructure.appendChild(projectLink);

    projectsContainer.appendChild(projectStructure);
  });
});

// Start Works Filter
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
  let projects = document.querySelectorAll(".projects .all");

  projects.forEach((project) => {
    if (!project.classList.contains(filterClass)) {
      project.style.display = "none";
    } else {
      project.style.display = "block";
    }
  });
}

// Init Contact Form

document
  .querySelector(".contact form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let message = document.querySelector(".message");
    emailjs.sendForm("service_k5c7r89", "template_4asvi4o", this).then(
      function () {
        document.querySelector(".message p").innerText =
          "Message sent successfully!";
        message.style.cssText = "right: 20px";
      },
      function () {
        document.querySelector(".message p").innerText = "SomeThing Wrong";
        message.style.cssText = "right: 20px";
      }
    );
  });
