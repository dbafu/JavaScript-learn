<?php 
	$num = $_POST['num'];
	if($num > 0){
		echo "大于0";
	}else if ($num == 0) {
		echo "等于0";
	}else{
		echo "小于0";
	}

?>
