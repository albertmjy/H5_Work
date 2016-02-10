<?php
header("Content-Type:application/json;charset=utf-8");

function upload($req, $file){
	$_REQUEST = $req;
	$_FILES = $file;
	
	$title = $_REQUEST["title"];
	$label = $_REQUEST["label"];
	$content = $_REQUEST["content"];
	$image = $_FILES["image"];
	
	$img_path = "";
	$msg = array();
	
	if ($image){
		if (count($image['name']) > 1){
			for ($i =0; $i<count($image['name']); $i++){
				$target_upload = "upload/" . basename($image["name"][$i]);
				$img_path .= $target_upload . ",";
				
				if (!move_uploaded_file($image["tmp_name"][$i], $target_upload)){
					$msg['file'] .= "Failed to save the uploaded file";
				} else {
					$msg['file'] .= "$target_upload";
				}
			}
		} else {
			$target_upload = "upload/" . basename($image["name"]);
			$img_path .= $target_upload;
			
			if (!move_uploaded_file($image["tmp_name"], $target_upload)){
				$msg['file'] .= "Failed to save the uploaded file";
			} else {
				$msg['file'] .= "$target_upload";
			}
		}
	}
	
	include "db.php";
	$db = new DB();
	$rst = $db->modify("insert into news values(null, '". rtrim($img_path, ",") ."', '$title', '$content', '2016-01-01', '$label')");	
	if ($rst){
		$msg['db'] = "success";
	} else {
		$msg["db"] = "failed";
	}
	
	echo json_encode($msg, JSON_UNESCAPED_UNICODE);
}

?>