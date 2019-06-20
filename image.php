<?php
// get input
$input = $_POST["in"];

$font = 'Lister.ttf';


//set up image
$height = 200;
$width = 625;

$im = imagecreatetruecolor($width, $height);
$black = imagecolorallocate($im, 34,34,34);
$white = imagecolorallocate($im, 254,254, 254);

//draw on image
imagefill($im, 0, 0, $white);
imagettftext($im, 60, 0, 10,60, $black, $font, $input);

//output image
Header('Content-type: image/png');

imagealphablending($im, false); 
imagesavealpha($im, true);

imagepng($im);

//clean up
imagedestroy($im);
?>