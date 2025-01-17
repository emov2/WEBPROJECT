<?php 
    include("connect.php");

    if(isset($_POST['gonder'])){
    	$username = $_POST['name'];
    	$email = $_POST['mail'];
    	$edescription = $_POST['description'];

	$sql = "INSERT INTO targetmuscletable (name, mail, description)
            VALUES ('$username','$email','$edescription')";
	
	mysqli_query($conn,$sql);
	header("Location: about.php?success=1");
	}
	
	$conn->close();
?>
