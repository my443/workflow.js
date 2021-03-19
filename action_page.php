
<!DOCTYPE html>
<html>
<head>
<title>Action Page
</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="workflow.js"></script>
</head>
<body>
<?php print_r($_POST); ?>
<?php
    echo '<p>'.$_POST['firstname'].'</p>';
    echo '<p>'.$_POST['lastname'].'</p>';
    ?>
</body>
</html>