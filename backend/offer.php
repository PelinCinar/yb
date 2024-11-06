<?php
header("Content-Type: application/json");

// Gelen veriyi al
$data = json_decode(file_get_contents("php://input"), true);

// Veritabanına bağlantıyı aç
$conn = new mysqli("localhost", "kullanici_adi", "sifre", "veritabani_adi");

// Bağlantı kontrolü
if ($conn->connect_error) {
    die(json_encode(["message" => "Veritabanı bağlantısı başarısız!"]));
}

// Form verilerini veritabanına ekle
$sql = "INSERT INTO offers (firstName, lastName, phoneNumber, email, companyName, subject)
VALUES ('" . $data['firstName'] . "', '" . $data['lastName'] . "', '" . $data['phoneNumber'] . "', '" . $data['email'] . "', '" . $data['companyName'] . "', '" . $data['subject'] . "')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Kayıt başarıyla eklendi!"]);
} else {
    echo json_encode(["message" => "Hata: " . $conn->error]);
}

// Bağlantıyı kapat
$conn->close();
?>
