export default function Stats({ tasks }) {
  if (!tasks.length) {
    return (
      <footer className='stats'>
        <em>Start adding some tasks to do.</em>
      </footer>
    );
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const completionRate = Math.ceil((completedTasks / totalTasks) * 100);
  return (
    <footer className='stats'>
      <em>
        {completionRate === 100
          ? 'You have completed all your tasks'
          : `You have ${totalTasks} tasks, and you already completed ${completedTasks} (${completionRate}%)`}
      </em>
    </footer>
  );
}
