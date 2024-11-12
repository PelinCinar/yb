<?php
header("Content-Type: application/json");

// Veritabanı bağlantısını dahil et
include 'database.php';  // database.php dosyasını dahil ettik

// Gelen veriyi al
$data = json_decode(file_get_contents("php://input"), true);

// Prepared statement ile form verilerini veritabanına ekle
$stmt = $conn->prepare("INSERT INTO offers (firstName, lastName, phoneNumber, email, companyName, subject) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $data['firstName'], $data['lastName'], $data['phoneNumber'], $data['email'], $data['companyName'], $data['subject']);

if ($stmt->execute()) {
    echo json_encode(["message" => "Kayıt başarıyla eklendi!"]);
} else {
    echo json_encode(["message" => "Hata: " . $stmt->error]);
}

// Bağlantıyı kapat
$stmt->close();
$conn->close();
?>
