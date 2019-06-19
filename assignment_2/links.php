<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Links',
    'items' => Array(
        'Home' => '/WP19/assignment_2/index.php',
        'Links' => '/WP19/assignment_2/links.php',
        'News' => '/WP19/assignment_2/news.php',
        'Future' => '/WP19/assignment_2/future.php'
    )
);
include __DIR__ . '/tpl/head.php';
/* Body */
include __DIR__ . '/tpl/body-start.php';
?>
    <div class="col-md-12">
        <h1>Welcome to the Links page!</h1>
        <form>
            <div class="form-group">
                <label for="website">Website name</label>
                <input type="text" class="form-control" id="website" placeholder="Enter the name of your website">
            </div>
            <div class="form-group">
                <label for="url">URL Website</label>
                <input type="text" class="form-control" id="url" placeholder="Enter the URL here">
            </div>
            <button type="button" id="confirm" class="btn btn-primary">Confirm</button>
            <button type="button" id="delete" class="btn btn-primary">Delete button</button>
        </form>
    </div>
<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';
?>