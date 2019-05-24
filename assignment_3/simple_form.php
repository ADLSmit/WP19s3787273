<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP19/assignment_3/index.php',
        'Add news item' => '/WP19/assignment_3/news_add.php',
        'Leap Year' => '/WP19/assignment_3/leapyear.php',
        'Simple Form' => '/WP19/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>

<h1>
    Welcome <?php echo $_GET["name"]; ?>!
</h1>

<p>
    You're from
    <?php
    if ($_GET["city"] === "Amsterdam") {
        echo "the capital of the Netherlands";
    } else{
        echo $_GET["city"];
    }
    ?>
    !
</p>

    <form method="GET">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name">
        </div>
        <div class="form-group">
            <label for="city">City</label>
            <input type="text" class="form-control" id="city"  name="city" placeholder="Enter the city you're from">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

<?php
include __DIR__ . '/tpl/body_end.php';
?>