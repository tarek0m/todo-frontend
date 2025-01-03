import Task from './Task';

export default function TodoList({ onDeleteTask, tasks }) {
  return (
    <div className='list'>
      <ul>
        {tasks.map((task) => (
          <Task onDeleteTask={onDeleteTask} task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
