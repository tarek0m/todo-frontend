import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Stats from './components/Stats';
import initialTasks from './tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddTasks={handleAddTasks} />
      <TodoList onDeleteTask={handleDeleteTask} tasks={tasks} />
      <Stats />
    </div>
  );
}

export default App;
