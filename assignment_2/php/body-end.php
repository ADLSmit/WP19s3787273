<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Home',
    'items' => Array(
        'Home' => '/WP19/assignment_2/index.php',
        'Links' => '/WP19/assignment_2/links.php',
        'News' => '/WP19/assignment_2/news.php',
        'Future' => '/WP19/assignment_2/future.php'
    )
);
include __DIR__ . '/php/head.php';
/* Body */
include __DIR__ . '/php/body-start.php';
?>
    <div class="col-md-12">
        <h1>Welcome to my site!</h1>
    </div>
<?php
include __DIR__ . '/php/body-end.php';
/* Footer */
include __DIR__ . '/php/footer.php';
?>