let recentArticlesPost = document.querySelector(".recent-post");
let articlesCategoryCount = document.querySelectorAll(
  "aside .categories .blogs-count"
);

let articleS = fetch("../../assets/data/articles.json").then((articles) =>
  articles.json()
);

// Change Articles Category Count
articleS.then((articlesData) => {
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


// Show Last 3 Articles Added
articleS.then((articlesData) => {
  let lastThreeArticles = [articlesData[articlesData.length - 1],articlesData[articlesData.length - 2],articlesData[articlesData.length - 3]]
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

    articleDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${article.date}`

    let articleTitle = document.createElement("h4");
    let articleTitleContent = document.createTextNode(article.title);
    articleTitle.appendChild(articleTitleContent)


    articleInfo.appendChild(articleDate)
    articleInfo.appendChild(articleTitle)

    articleLink.appendChild(articleImg);
    articleLink.appendChild(articleInfo);


    recentArticle.appendChild(articleLink);

    recentArticlesPost.appendChild(recentArticle);
  });
});

{/* <div class="blog" title="The services provide for design">
<a href="#" class="df gap-20">
  <img src="../assets/images/blog-4-1536x597.jpg" alt="blog1" />
  <div class="blog-info">
    <span
      ><i class="fa-solid fa-calendar-days"></i> May 10,2024</span
    >
    <h4>The services provide for design</h4>
  </div>
</a>
</div> */}