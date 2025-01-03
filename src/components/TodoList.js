import Task from './Task';

export default function TodoList({ tasks }) {
  return (
    <div className='list'>
      <ul>
        {tasks.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </ul>
    </div>
  );
}
