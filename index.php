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
    <section id ="mainSection">
        <div class="dots" id="dots">
<<<<<<< HEAD
            <?php
            $arr=glob("slid/*.{jpg}",GLOB_BRACE);//ДОСТАЕМ массив картинок из файла

            for($a = 1; $a < count($arr)+1; $a++){
                echo '<div class="dot" data-dot-number="'.$a.'")"></div>';
            } 
            ?>
=======
             
>>>>>>> 919d268bfe571616a4f0e4602485f98b90cfe532
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
<<<<<<< HEAD
=======
                $arr=glob("slid/*.{jpg}",GLOB_BRACE);  //массив картинок из файла
 
>>>>>>> 919d268bfe571616a4f0e4602485f98b90cfe532
                echo '<div class="slid" style = "background-image: url('.$arr[count($arr) - 1].')"></div>';

                foreach($arr as $f){
                    echo '<div class="slid" style = "background-image: url('.$f.')"></div>';
                }
                echo '<div class="slid" style = "background-image: url('.$arr[0].')"></div>';
            ?>
        </div>
        <div class="zero"></div>
    </section>
    <script src="Untitled-1.js"></script>
</body>
</html>
 