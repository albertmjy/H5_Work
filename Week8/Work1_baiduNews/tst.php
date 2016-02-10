
<form method="post" action="MC.php" enctype="multipart/form-data">
	<input type="text" name="_user"  />
	<input type="file" name="_file" />
	<input type="submit" name="_submit" value="submit" />
</form>

<?php
//	var_dump($_REQUEST);
//	echo "<br />";
//	var_dump($_FILES);
//echo "+++++++++++++++<br />";
//echo $_FILES["_file"];
//echo "+++++++++++++++<br />";
//
//	foreach($_FILES[_file] as $k=>$v){
//		echo "File:  $k => <mark>$v</mark> <br />";
//	}
//	
	
	$target = "upload/" . basename($_FILES["_file"]["name"]);
	if (move_uploaded_file($_FILES["_file"]["tmp_name"], $target)) {
        echo "The file";
	}
	
//	echo date("m d Y");
//	echo getdate();
	echo gmdate("Y-m-d");
//	foreach( $_SERVER as $k=>$v){
//		echo "$k => <mark>$v</mark> <br />";
//	}
?>