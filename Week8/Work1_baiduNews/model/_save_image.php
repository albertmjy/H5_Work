<?php
	
	if ($image){
		$msg['file'] = array();
		if (count($image['name']) > 1){
			for ($i =0; $i<count($image['name']); $i++){
				$target_upload = "upload/" . basename($image["name"][$i]);
				$img_path .= $target_upload . ",";
				
				if (!move_uploaded_file($image["tmp_name"][$i], $target_upload)){
					array_push($msg['file'], "Failed to save the uploaded file - $target_upload");
				} else {
					array_push($msg['file'], "Success - $target_upload");
				}
			}
		} else {
			$target_upload = "upload/" . basename($image["name"]);
			$img_path .= $target_upload;
			
			if (!move_uploaded_file($image["tmp_name"], $target_upload)){
				array_push($msg['file'], "Failed to save the uploaded file - $target_upload");
			} else {
				array_push($msg['file'], "Success - $target_upload");
			}
		}
	}
?>