<?php require "db.php";
header("Content-Type:application/json;charset=utf-8");

function read(){
	$db = new DB();
	$json = $db->query("select * from image");
	echo $json;
}

function add($req, $file){
	$title = $req["title"];
	$image = $file['image'];
	
	$img_path = "";
	$msg = array();
	
	//save uploaded image
	$dir = "upload/big-image";
	if (!file_exists($dir)){
		mkdir($dir, 0777);
	}
	
	$target_upload = "upload/big-image/" . basename($image["name"]);
	$img_path .= $target_upload;
	
	if (!move_uploaded_file($image["tmp_name"], $target_upload)){
		$msg['file'] .= "Failed to save the uploaded image";
	} else {
		$msg['file'] .= "Save the image file: $target_upload";
	}
	
	$db = new DB();
	$likes = rand(0, 500);
	$rst = $db->modify("insert into image values(null, '$img_path', '$title',  '$likes')");	
	if ($rst){
		$msg['db'] = "success";
	} else {
		$msg["db"] = "failed";
	}
	
	echo json_encode($msg, JSON_UNESCAPED_UNICODE);
}

?>