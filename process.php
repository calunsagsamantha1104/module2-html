<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid JSON input"
    ]);
    exit;
}

if (empty($data['name'])) {
    echo json_encode([
        "status" => "error",
        "message" => "Name is required"
    ]);
    exit;
}

$name = htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8');
echo json_encode([
    "status" => "success",
    "message" => "Hello " . $name
]);
?>