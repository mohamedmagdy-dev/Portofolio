<!DOCTYPE html>
<html lang="en">
  <head>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- Meta description for search engines -->
      <meta
        name="description"
        content="Welcome to the personal portfolio of Mohamed Magdy Elsayed, a passionate Frontend Developer. Explore my projects, skills, and experiences in web development."
        />
      <!-- Meta author with your name -->
      <meta name="author" content="Mohamed Magdy Elsayed" />
      <!-- Meta keywords to improve SEO -->
      <meta
        name="keywords"
        content="Frontend Developer, Mohamed Magdy Elsayed, Web Developer, HTML, CSS, JavaScript, Portfolio, Frontend, محمد مجدي السيد"
        />
      <link rel="stylesheet" href="../../styles/normailze.css" />
      <link rel="stylesheet" href="../../styles/global.css" />
      <link rel="stylesheet" href="../../styles/forms.css" />
      <title>Create Article Form</title>
  </head>
  </head>
  <body>
    <!-- Start Header  -->
    <header>
      <div class="container df f-sb f-v">
        <a href="index.html" class="logo">
        <img src="../../assets/images/logo.png" alt="logo" />
        </a>
        <nav>
          <ul class="df gap-20">
            <li><a href="../../#services">services</a></li>
            <li><a href="../../#works">works</a></li>
            <li><a href="../../#resume">resume</a></li>
            <li><a href="../../#skills">skills</a></li>
            <li><a href="../../pages/blogs.html">blogs</a></li>
            <li><a href="../../#contact">contact</a></li>
          </ul>
          <a
            href="mailto:mohamedmagdyelsayed7@gmail.com"
            class="hire-me hire-me-mobile hide-me"
            >hire me!</a
            >
        </nav>
        <button class="hide-me mobile-menu">
        <i class="fa-solid fa-bars"></i>
        </button>
        <a href="mailto:mohamedmagdyelsayed7@gmail.com" class="hire-me df-ac"
          >hire me!</a
          >
      </div>
    </header>
    <!-- End Header  -->
    <form class="article-data" action="save_article.php" method="post" enctype="multipart/form-data">
      <div class="container">
        <input type="text" placeholder="Article Title" maxlength="50" name="title" required>
        <textarea placeholder="Short Content" maxlength="180" name="short-content" required></textarea>
        <textarea placeholder="Article Content" name="content" required></textarea>
        <input placeholder="Article category" name="category">
        <input type="file" title="Choose Article Image" id="image" name="image" accept="image/*">
        <input type="text" id="date" name="date" value="<?php echo date('F d, Y'); ?>" readonly>
        <input type="submit" value="Add Article">
      </div>
    </form>
    <!-- Start Footer -->
    <footer>
      <div class="container df f-v gap-20">
        <img src="../../assets/images/logo.png" alt="logo.png" />
        <nav>
          <ul class="df gap-20 f-h">
            <li><a href="../../#services">services</a></li>
            <li><a href="../../#works">works</a></li>
            <li><a href="../../#resume">resume</a></li>
            <li><a href="../../#skills">skills</a></li>
            <li><a href="../../pages/blogs.html">blogs</a></li>
            <li><a href="../../#contact">contact</a></li>
          </ul>
        </nav>
        <p>© 2024 All Rights Reserved by Mohamed Magdy (:</p>
      </div>
    </footer>
    <!-- End Footer -->
    <script src="../../scripts/js/home.js"></script>
    <script src="../../scripts/js/global.js"></script>
  </body>
</html>