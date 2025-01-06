export default function Task({ task, onDeleteTask, onToggleTask }) {
  return (
    <li>
      <input
        type='checkbox'
        checked={task.completed}
        value={task.completed}
        onChange={() => {
          onToggleTask(task.id);
        }}
      />
      <span style={task.completed ? { textDecoration: 'line-through' } : {}}>
        {task.description}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>❌</button>
    </li>
  );
}
