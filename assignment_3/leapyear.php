<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
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
    <script type="text/javascript" src="scripts/leapyear.js"></script>

    <h1>
        Welcome <?php echo $_POST["name"]; ?>!
    </h1>

    <p>
        <?php
        if ($_POST["age"] > 0) {
            echo "The next 5 leap years, this will be your age!";
        }
        ?>
    </p>

    <p>
        <?php
        if ($_POST["city"] === "Groningen") {
            echo "Nice, you're living in Groningen!";
        }
        ?>
    </p>

    <table class="table">
        <thead>
        <tr>
            <th scope="col">Year</th>
            <th scope="col">Age</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">2024</th>
            <td>
                <?php
                echo $_POST["age"] + 4;
                ?>
            </td>
        </tr>
        <tr>
            <th scope="row">2028</th>
            <td>
                <?php
                echo $_POST["age"] + 8;
                ?>
            </td>
        </tr>
        <tr>
            <th scope="row">2032</th>
            <td>
                <?php
                echo $_POST["age"] + 12;
                ?>
            </td>
        </tr>
        <tr>
            <th scope="row">2036</th>
            <td>
                <?php
                echo $_POST["age"] + 16;
                ?>
            </td>
        </tr>
        <tr>
            <th scope="row">2040</th>
            <td>
                <?php
                echo $_POST["age"] + 20;
                ?>
            </td>
        </tr>
        </tbody>
    </table>

    <form method="POST">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control is-invalid" id="name" name="name" placeholder="Enter your name here">
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
                Please fill in your name!
            </div>
        </div>
        <div class="form-group">
            <label for="age">Age</label>
            <input type="number" class="form-control is-invalid" id="age"  name="age" placeholder="Enter your age here (numbers only!)">
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
                Please fill in your age!
            </div>
        </div>
        <div class="form-group">
            <label for="mail">E-mail address</label>
            <input type="email" class="form-control is-invalid" id="mail"  name="mail" placeholder="example123@email.com">
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
                Please fill in your E-mail address!
            </div>
        </div>
        <div class="form-group">
            <label for="city">City</label>
            <input type="text" class="form-control is-invalid" id="city"  name="city" placeholder="Enter the city you live in">
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
                Please fill in your place of residence!
            </div>
        </div>
        <div id="submit" class="btn btn-primary">Submit</div>
    </form>

<?php
include __DIR__ . '/tpl/body_end.php';
?>