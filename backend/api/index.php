<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$tasksFile = 'tasks.json';

// Read tasks from file
if (file_exists($tasksFile)) {
  $tasks = json_decode(file_get_contents($tasksFile), true);
} else {
  $tasks = [];
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'OPTIONS':
    http_response_code(204); // No content
    break;

  case 'GET':
    echo json_encode($tasks);
    break;

  case 'POST':
    $data = json_decode(file_get_contents('php://input'), true);
    $newTask = [
      'id' => (int) (microtime(true) * 1000),
      'description' => $data['description'],
      'completed' => false
    ];
    array_push($tasks, $newTask);
    file_put_contents($tasksFile, json_encode($tasks));
    echo json_encode($tasks);
    break;

  case 'PUT':
    $data = json_decode(file_get_contents('php://input'), true);
    $taskId = $data['id'];
    foreach ($tasks as &$task) {
      if ($task['id'] == $taskId) {
        $task['completed'] = $data['completed'];
        break;
      }
    }
    file_put_contents($tasksFile, json_encode($tasks));
    echo json_encode($tasks);
    break;

  case 'DELETE':
    $data = json_decode(file_get_contents('php://input'), true);
    $taskId = $data['id'];
    $tasks = array_filter($tasks, function ($task) use ($taskId) {
      return $task['id'] != $taskId;
    });
    file_put_contents($tasksFile, json_encode(array_values($tasks)));
    echo json_encode(array_values($tasks));
    break;

  default:
    http_response_code(405); // Method not allowed
    echo json_encode(['error' => 'Method Not Allowed']);
    break;
}
