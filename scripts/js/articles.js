let articlesContainer = document.querySelector(".articles")
let articles = fetch("../../assets/data/articles.json").then((articles) =>
  articles.json()
);

// Add Articles From Json File Into Blogs Page
articles.then((articles) => {
  articles.forEach((article) => {
    let articleElement = document.createElement("div");
    articleElement.classList.add("blog");

    let articleCategory = document.createElement("span");
    articleCategory.classList.add("blog-category");
    let articleCategoryContent = document.createTextNode(article.category);
    articleCategory.appendChild(articleCategoryContent);

    let articleImgContainer = document.createElement("div");
    articleImgContainer.classList.add("blog-img");

    let articleImg = document.createElement("img");
    articleImg.src = article.image;
    articleImg.alt = article.title;
    articleImg.title = article.title;
    articleImgContainer.appendChild(articleImg);

    let articleInfo = document.createElement("div");
    articleInfo.classList.add("blog-info");

    let articleP = document.createElement("p");

    let articleAuthor = document.createElement("span");
    articleAuthor.classList.add("author");

    articleAuthor.innerHTML = `<i class="fa-solid fa-person"></i> By Mohamed Magdy`

    articleP.appendChild(articleAuthor);

    let articleDate = document.createElement("span");
    articleDate.classList.add("date");

    articleDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${article.date}`

    articleP.appendChild(articleDate);

    articleInfo.appendChild(articleP);

    let articleTitle = document.createElement("h2");
    let articleTitleContent = document.createTextNode(article.title);
    articleTitle.appendChild(articleTitleContent);

    articleInfo.appendChild(articleTitle);

    let articleShortDis = document.createElement("p");
    let articleShortDisContent = document.createTextNode(article.short_content);
    articleShortDis.appendChild(articleShortDisContent);

    articleInfo.appendChild(articleShortDis);

    let articleLink = document.createElement("a");
    articleLink.href = article.filename;
    let articleLinkContent = document.createTextNode("Read More");
    articleLink.appendChild(articleLinkContent);

    articleInfo.appendChild(articleLink);

    articleElement.appendChild(articleCategory);
    articleElement.appendChild(articleImgContainer);
    articleElement.appendChild(articleInfo);


    articlesContainer.appendChild(articleElement)
  });
});
