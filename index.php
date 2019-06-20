<html>

<head>
<title>Mistew Pwesident?</title>
</head>
<body>
Hewwo?<br>

<img src="image.php" alt="Image created by a PHP script">
	<br><?php
		$myvar = "my variable!";

		echo $myvar;
		echo "<br>";
		echo "some echo string";
		echo "<br>";

		$a = 5;
		$b = 10;
		$sum = $a + $b;
		echo $sum;
		echo "<br>";
		$name = "Aethelind";
		echo "Hello, " . $name;
		echo "<br>";
		echo "Hello, $name";
		echo "<br>";

		$numbers = array(100,420,594,59);
		$sum = 0;

		foreach ($numbers as $elem){
			$sum += $elem;
		}

		echo $sum
	?>


<form action="process.php" method = post>
	Enter your name:
	<input name="name" type = "text">
	<input type = "submit">
</form>


</body>

</html>