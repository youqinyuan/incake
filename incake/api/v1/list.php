<?php
header("Access-Control-Allow-Origin:*");
// //处理表单请求
header("content-type:text/html;charset=utf8");
mysql_connect("localhost","root","");
mysql_select_db("incake");
$sql = "SELECT * FROM cake";
mysql_query("set names 'utf8'");
$result=mysql_query($sql);
$newArr=array();
	while($arr=mysql_fetch_array($result)){
		array_push($newArr,$arr);
	}
	echo json_encode($newArr);
	mysql_close();
?>