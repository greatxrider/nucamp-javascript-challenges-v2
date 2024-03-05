// Request data to the PHP 
const limit = {"limit":10};
const dbParam = JSON.stringify(limit);
xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  document.getElementById("demo").innerHTML = this.responseText;
}
xmlhttp.open("GET","json_demo_db.php?x=" + dbParam);
xmlhttp.send();

// PHP is serverside PLanguage, prepares data, gets data from database
// SEE PHP File from Folder
// <?php
//   header("Content-Type: application/json; charset=UTF-8");
//   $obj = json_decode($_GET["x"], false);

//   $conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");
//   $stmt = $conn->prepare("SELECT name FROM customers LIMIT ?");
//   $stmt->bind_param("s", $obj->limit);
//   $stmt->execute();
//   $result = $stmt->get_result();
//   $outp = $result->fetch_all(MYSQLI_ASSOC);

//   echo json_encode($outp);
// ?>

// Use the Data received from PHP
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  let text = "";
  for (let x in myObj) {
    text += myObj[x].name + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}
