<?php
header("Access-Control-Allow-Origin:*");
//处理表单请求
header("content-type:text/html;charset=utf8");

$username = $_GET['username'];
$password = $_GET['password'];

mysql_connect("localhost","root","");
mysql_select_db("incake");
$sql = "SELECT count(*) FROM incake WHERE username = '$username' AND password = '$password'";
mysql_query("set names 'utf8'");
$result = mysql_query($sql);
$num = mysql_fetch_array($result);

if($num[0]){
		echo '{"code":1}';
		
	}else{
		echo '{"code":0}';
	}
mysql_close();
?>