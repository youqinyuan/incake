<?php
	header("Access-Control-Allow-Origin:*");
	//处理表单请求
	$username = $_GET['username'];
	$password = $_GET['password'];
	header("content-type:text/html;charset=utf8");
	//把用户名和密码插入到数据库

	// echo "hello";
	mysql_connect("localhost","root","");
	mysql_select_db("incake");
	$sql = "INSERT INTO incake (username,password) VALUES ('$username','$password')";
	mysql_query("set names 'utf8");
	$result = mysql_query($sql);
	if($result){
		echo '{"code":1}';
	}else{
		echo '{"code":0}';
	}
	mysql_close();

?>