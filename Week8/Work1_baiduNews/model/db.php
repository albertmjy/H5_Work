<?php
class DB{
	var $host = "localhost";
	var $user = "root";
	var $pwd = "56474587";
	var $database = "baidu_news";
	var $conn = null;
	
	public function DB(){
	}
	
	function connect(){
		$this->conn = mysqli_connect($this->host, $this->user, $this->pwd, $this->database);
		mysqli_set_charset($this->conn, "utf8");
	}
	
	function close(){
		if ($this->conn){
			mysqli_close($this->conn);
		}
	}
	
	public function query($sql){
		$this->connect();
		$result = mysqli_query($this->conn, $sql);
		$arr = array();
		while ($row = $result->fetch_assoc()){
			array_push($arr, $row);
		}
		
		$this->close();
		$json = json_encode($arr, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
		echo $json;
		
	}
	public function modify($sql){
		$this->connect();
		$result = mysqli_query($this->conn, $sql);
		$this->close();
		return $result;
	}
}

?>