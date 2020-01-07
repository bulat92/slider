<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css.css">
</head>
<body>
    <section>
        <div class="dots" id="dots">
             
        </div>
        <div class="control">
            <div class="prev" id="prev">
                <div class="arrow" id="prevArrow"></div>
            </div>
            <div class="next" id="next">
                <div class="arrow" id="nextArrow" ></div>
            </div>
        </div>
        <div class="slider" id="slider">
            <?php
                foreach(glob("slid/*.{jpg}",GLOB_BRACE) as $f)
                echo '<div class="slid" style = "background-image: url('.$f.')"></div>';
            ?>
        </div>
        <div class="zero"></div>
    </section>
    <script src="Untitled-1.js"></script>
</body>
</html>
 