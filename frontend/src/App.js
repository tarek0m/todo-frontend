import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Stats from './components/Stats';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  // GET
  useEffect(() => {
    fetch('http://localhost:8000/')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  // POST
  function handleAddTasks(task) {
    fetch('http://localhost:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }

  //PUT
  function handleToggleTask(id) {
    const task = tasks.find((task) => task.id === id);
    fetch('http://localhost:8000', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, completed: !task.completed }),
    })
      .then((response) => response.json())
      .then((updatedTasks) => setTasks(updatedTasks))
      .catch((error) => console.error('Error toggling task:', error));
  }

  // DELETE
  function handleDeleteTask(id) {
    fetch('http://localhost:8000', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((updatedTasks) => setTasks(updatedTasks))
      .catch((error) => console.error('Error deleting task:', error));
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
