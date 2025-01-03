export default function Task({ onDeleteTask, task }) {
  return (
    <li>
      <span style={task.completed ? { textDecoration: 'line-through' } : {}}>
        {task.description}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>❌</button>
    </li>
  );
}
