<?php
$search_keyword = '';
if (isset($_REQUEST['search_keyword'])) {
    $search_keyword = $_REQUEST['search_keyword'];
}
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "th2012e_php";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM furniture";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $rows = array();
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    print json_encode($rows, JSON_UNESCAPED_UNICODE);
} else {

}
$conn -> close();

