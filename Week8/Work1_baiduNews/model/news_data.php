<?php require "db.php";
header("Content-Type:application/json;charset=utf-8");

function read(){
	$db = new DB();
	$json = $db->query("select * from news");
	echo $json;
}

function add($req, $file){
	$_REQUEST = $req;
	$_FILES = $file;
	
	$title = $_REQUEST["title"];
	$label = $_REQUEST["label"];
	$content = $_REQUEST["content"];
	$image = $_FILES["image"];
	
	$img_path = "";
	$msg = array();
	
	include "_save_image.php?id=news";
	
	$db = new DB();
	$rst = $db->modify("insert into news values(null, '". rtrim($img_path, ",") ."', '$title', '$content', '" . gmdate("Y-m-d") . "', '$label')");	
	if ($rst){
		$msg['db'] = "success";
	} else {
		$msg["db"] = "failed";
	}
	
	echo json_encode($msg, JSON_UNESCAPED_UNICODE);
}

?>