export default function Stats({ completedTasks, totalTasks }) {
  const completionRate = Math.ceil((completedTasks / totalTasks) * 100);
  return (
    <footer className='stats'>
      <em>
        You have {totalTasks} tasks, and you already completed {completedTasks}{' '}
        ({completionRate}%)
      </em>
    </footer>
  );
}
