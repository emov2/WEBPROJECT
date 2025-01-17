<?php 
    include("connect.php");


    	$username = $_POST['name'];
    	$email = $_POST['mail'];
    	$edescription = $_POST['description'];

	$sql = "SELECT name, mail, description from targetmuscletable;
	$result = $conn->query($sql);
	
	mysqli_query($conn,$sql);
	
	if($result->num_rows>0){
	   while($row=$rwsult->fetch_assoc(){
	   echo "<tr><td>". $row["name"] . "</td><td>" . $row["description"]."</td></tr>";
	   echo "</table>";
	}else{
	echo "0 result";
	$conn->close();
?>
