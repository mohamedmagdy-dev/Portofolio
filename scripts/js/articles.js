let articlesContainer = document.querySelector(".articles");
let recentArticlesPost = document.querySelector(".recent-post");
let articlesCategoryCount = document.querySelectorAll(
  "aside .categories .blogs-count"
);

let articles = fetch("../../assets/data/articles.json").then((articles) =>
  articles.json()
);

// Change Articles Category Count
articles.then((articlesData) => {
  let htmlArticleCount = 0;
  let cssArticleCount = 0;
  let jsArticleCount = 0;
  let reactArticleCount = 0;
  let responsiveArticleCount = 0;
  articlesData.forEach((article) => {
    if (article.category == "Responsive") {
      responsiveArticleCount++;
    } else if (article.category == "Css") {
      cssArticleCount++;
    } else if (article.category == "javaScript") {
      jsArticleCount++;
    } else if (article.category == "React") {
      reactArticleCount++;
    } else if (article.category == "Html") {
      htmlArticleCount++;
    }
  });

  articlesCategoryCount[0].innerHTML = `(${htmlArticleCount})`;
  articlesCategoryCount[1].innerHTML = `(${cssArticleCount})`;
  articlesCategoryCount[2].innerHTML = `(${reactArticleCount})`;
  articlesCategoryCount[3].innerHTML = `(${jsArticleCount})`;
  articlesCategoryCount[4].innerHTML = `(${responsiveArticleCount})`;
});

// Add Articles From Json File Into Articles Pages
if (
  document.title == "Html" ||
  document.title == "Css" ||
  document.title == "javaScript" ||
  document.title == "React" ||
  document.title == "Responsive"
) {
  articles.then((articles) => {
    articles.forEach((article) => {
      if (article.category == document.title) {
        console.log(articles);
        articleStructure(article);
      }
    });
  });
}

if (document.title == "Blogs") {
  articles.then((articles) => {
    articles.forEach((article) => {
      console.log(articles);
      articleStructure(article);
    });
  });
}

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

    articleLink.classList.add("df");
    articleLink.classList.add("gap-20");

    let articleImg = document.createElement("img");
    articleImg.src = article.image;
    articleImg.alt = article.title;
    articleImg.title = article.title;

    let articleInfo = document.createElement("div");
    articleInfo.classList.add("blog-info");

    let articleDate = document.createElement("span");
    articleDate.classList.add("date");

    articleDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${article.date}`;

    let articleTitle = document.createElement("h4");
    let articleTitleContent = document.createTextNode(article.title);
    articleTitle.appendChild(articleTitleContent);

    articleInfo.appendChild(articleDate);
    articleInfo.appendChild(articleTitle);

    articleLink.appendChild(articleImg);
    articleLink.appendChild(articleInfo);

    recentArticle.appendChild(articleLink);

    recentArticlesPost.appendChild(recentArticle);
  });
});

function articleStructure(article) {
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

  articleAuthor.innerHTML = `<i class="fa-solid fa-person"></i> By Mohamed Magdy`;

  articleP.appendChild(articleAuthor);

  let articleDate = document.createElement("span");
  articleDate.classList.add("date");

  articleDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${article.date}`;

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

  articlesContainer.appendChild(articleElement);
}
