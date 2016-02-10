<?php 
header("Content-Type:application/json;charset=utf-8");

controller();

function controller(){
	$id = $_REQUEST["id"];
	$action = $_REQUEST["action"];
	
	switch ($id){
	case "recommand":
		include "model/recommand_data.php";
		if ($action == 'upload'){
			add($_REQUEST, $_FILES);
		} else {
			read();
		}
		break;
	case "news":
		include "model/news_data.php";
		if ($action == 'upload'){
			add($_REQUEST, $_FILES);
		} else {
			read();
		}
		break;
	case "local":
		include 'model/local_data.php';
		if ($action == 'upload'){
			add($_REQUEST, $_FILES);
		} else {
			read();
		}
		break;
	case "image":
		include 'model/image_data.php';
		if ($action == 'upload'){
			add($_REQUEST, $_FILES);
		} else {
			read();
		}
		break;
	case "entertainment":
		include 'model/entertainment_data.php';
		if ($action == 'upload'){
			add($_REQUEST, $_FILES);
		} else {
			read();
		}
		break;
	default:
		break;
	}
}


?>