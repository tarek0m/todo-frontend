import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Stats from './components/Stats';
import tasks from './tasks';

function App() {
  const completedTasks = tasks.filter((task) => task.completed).length;
  return (
    <div className='app'>
      <Logo />
      <Form />
      <TodoList tasks={tasks} />
      <Stats completedTasks={completedTasks} totalTasks={tasks.length} />
    </div>
  );
}

export default App;
