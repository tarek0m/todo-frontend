export default function Task({ task }) {
  return (
    <li>
      <span style={task.completed ? { textDecoration: 'line-through' } : {}}>
        {task.description}
      </span>
      <button>❌</button>
    </li>
  );
}
