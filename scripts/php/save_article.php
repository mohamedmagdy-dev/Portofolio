<?php
// استقبال بيانات المقال من النموذج
$title = isset($_POST['title']) ? $_POST['title'] : '';
$content = isset($_POST['content']) ? $_POST['content'] : '';
$category = isset($_POST['category']) ? $_POST['category'] : '';
$short_content = isset($_POST['short-content']) ? $_POST['short-content'] : '';
$date = isset($_POST['date']) ? $_POST['date'] : ''; // استلام تاريخ اليوم
$imageName = ''; // متغير لحفظ اسم الصورة

if ($title && $content) {
    // إنشاء اسم الملف بناءً على عنوان المقال (إزالة المسافات)
    $filename = strtolower(str_replace(' ', '_', $title)) . '.html';
    
    // تحديد مسار الحفظ للمجلد الجديد
    $saveDir = '../../pages/articles/'; // اسم المجلد الذي تريد حفظ الملفات فيه
    $imageDir = '../../assets/images/articles/'; // مسار حفظ الصور
    $fullPath = $saveDir . $filename; // المسار الكامل للملف

    // التأكد من وجود مجلد الصور
    if (!file_exists($imageDir)) {
        mkdir($imageDir, 0777, true); // إنشاء المجلد إذا لم يكن موجودًا
    }

    // حفظ البيانات في ملف JSON
    $articleData = array(
        'title' => $title,
        'category' => $category,
        'short_content' => $short_content,
        'date' => $date, // إضافة التاريخ
        'filename' => $fullPath // تحديث مسار الملف في JSON
    );

    // التعامل مع الصورة المرفوعة
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $imageTmpPath = $_FILES['image']['tmp_name'];
        $imageName = basename($_FILES['image']['name']);
        $imagePath = $imageDir . $imageName; // تحديد مسار حفظ الصورة
        if (move_uploaded_file($imageTmpPath, $imagePath)) { // نقل الصورة إلى المجلد
            // إضافة اسم الصورة إلى بيانات المقال
            $articleData['image'] = $imagePath; // استخدام المسار الكامل للصورة
        } else {
            echo "Error uploading the image.";
        }
    }

    // قراءة محتويات ملف JSON الحالي (إذا كان موجودًا) أو إنشاء ملف جديد
    $jsonFile = '../../assets/data/articles.json';
    if (file_exists($jsonFile)) {
        $jsonData = json_decode(file_get_contents($jsonFile), true);
    } else {
        $jsonData = array();
    }

    // إضافة المقال الجديد إلى قائمة المقالات
    $jsonData[] = $articleData;
    file_put_contents($jsonFile, json_encode($jsonData, JSON_PRETTY_PRINT));

    // إنشاء ملف HTML للمقال
    $htmlContent = '
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Your description here" />
    <meta name="author" content="Mohamed Magdy Elsayed" />
    <meta name="keywords" content="Frontend Developer, Mohamed Magdy Elsayed, Web Developer, HTML, CSS, JavaScript, Portfolio, Frontend, محمد مجدي السيد" />
    <link rel="stylesheet" href="../../styles/normailze.css" />
    <link rel="stylesheet" href="../../styles/all.min.css" />
    <link rel="stylesheet" href="../../styles/global.css" />
    <link rel="stylesheet" href="../../styles/blogs.css" />
    <title>' . htmlspecialchars($title) . '</title>
  </head>
  <body>
    <!-- Start Header  -->
    <header>
      <div class="container df f-sb f-v">
        <a href="../../index.html" class="logo">
          <img src="../../assets/images/logo.png" alt="logo" />
        </a>
        <nav>
          <ul class="df gap-20">
            <li><a href="../../#services">services</a></li>
            <li><a href="../../#works">works</a></li>
            <li><a href="../../#resume">resume</a></li>
            <li><a href="../../#skills">skills</a></li>
            <li><a href="../blogs.html">blogs</a></li>
            <li><a href="../../#contact">contact</a></li>
          </ul>
          <a href="mailto:mohamedmagdyelsayed7@gmail.com" class="hire-me hire-me-mobile hide-me">hire me!</a>
        </nav>
        <button class="hide-me mobile-menu">
          <i class="fa-solid fa-bars"></i>
        </button>
        <a href="mailto:mohamedmagdyelsayed7@gmail.com" class="hire-me df-ac">hire me!</a>
      </div>
    </header>
    <!-- End Header  -->
    <!-- Start Blogs -->
    <section class="blogs">
      <div class="container">
        <div class="blogs-place">
          <div class="blog">
            <span class="blog-category">' . htmlspecialchars($category) . '</span>
            <div class="blog-img">
              <img src="' . htmlspecialchars($imagePath) . '" alt="' . htmlspecialchars($title) . '" title="' . htmlspecialchars($title) . '" />
            </div>
            <div class="blog-info">
              <p>
                <span class="author"><i class="fa-solid fa-person"></i> Mohamed Magdy</span>
                <span class="date"><i class="fa-solid fa-calendar-days"></i> ' . htmlspecialchars($date) . '</span>
              </p>
              <h2>' . htmlspecialchars($title) . '</h2>
              <div class="content">
                ' . nl2br(htmlspecialchars($content)) . '
              </div>
              </div>
            </div>
          </div>

        <aside>
          <div class="search df">
            <input type="text" placeholder="Search..." />
            <button><i class="fa-brands fa-searchengin"></i></button>
          </div>
          <div class="categories">
            <h3>Categories</h3>
            <ul>
              <li><a href="../html.html">Html</a><span class="blogs-count">(0)</span></li>
              <li><a href="../css.html">Css</a><span class="blogs-count">(0)</span></li>
              <li><a href="../react.html">React</a><span class="blogs-count">(0)</span></li>
              <li><a href="../javascript.html">JavaScript</a><span class="blogs-count">(0)</span></li>
              <li><a href="../web-responsive.html">Responsive</a><span class="blogs-count">(0)</span></li>
            </ul>
          </div>
          <div class="recent-post">
            <h3>Recent post</h3>
          </div>
          <div class="popular-tag">
            <h3>Popular tag</h3>
            <a href="../html.html">Html</a>
            <a href="../css.html">Css</a>
            <a href="../react.html">Rect</a>
            <a href="../javascript.html">JavaScript</a>
            <a href="../web-responsive.html">Web Responsive</a>
          </div>
        </aside>
      </div>
    </section>
    <!-- End Blogs -->
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
            <li><a href="../blogs.html">blogs</a></li>
            <li><a href="../../#contact">contact</a></li>
          </ul>
        </nav>
        <p>&copy; 2024 Mohamed Magdy Elsayed. All rights reserved.</p>
      </div>
    </footer>
    <!-- End Footer -->
    
        <script src="../../scripts/js/global.js"></script>
        <script src="../../scripts/js/articles-statistics.js"></script>
  </body>
</html>';

    // حفظ المحتوى في الملف
    file_put_contents($fullPath, $htmlContent);
    echo "تم حفظ المقال بنجاح.";
} else {
    echo "";
}
?>