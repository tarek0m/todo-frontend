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

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all tasks?'
    );

    if (confirmed) setTasks([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddTasks={handleAddTasks} />
      <TodoList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        onClearList={handleClearList}
      />
      <Stats tasks={tasks} />
    </div>
  );
}

export default App;
