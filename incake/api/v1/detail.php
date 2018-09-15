<?php
header("Access-Control-Allow-Origin:*");
$id=$_GET['id'];
mysql_connect("localhost","root","");
mysql_select_db("incake");
$sql="SELECT * FROM cake WHERE id='$id'";
mysql_query("set names 'utf8'");
$result=mysql_query($sql);
$newArr=array();
while($arr=mysql_fetch_array($result)){
	array_push($newArr,$arr);
}
	echo json_encode($newArr);
mysql_close();
?>
