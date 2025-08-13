<?php
header('Content-Type: application/json');

$photos = glob('gallery/photos/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
$videos = glob('gallery/videos/*.{mp4,mov,avi}', GLOB_BRACE);

echo json_encode([
    "photos" => $photos,
    "videos" => $videos
]);
