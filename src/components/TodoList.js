import { useState } from 'react';
import Task from './Task';

export default function TodoList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('date');
  let sortedTasks;

  switch (sortBy) {
    case 'date':
      sortedTasks = tasks;
      break;
    case 'a-z':
      sortedTasks = tasks
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case 'status':
      sortedTasks = tasks
        .slice()
        .sort((a, b) => Number(a.completed) - Number(b.completed));
      break;
    default:
      break;
  }
  return (
    <div className='list'>
      <ul>
        {sortedTasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='date'>Sort by Date (old to new)</option>
          <option value='a-z'>Sort by Alphabet (A-Z)</option>
          <option value='status'>Sort by Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
