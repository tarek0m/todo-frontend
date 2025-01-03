import { useState } from 'react';

export default function Form({ onAddTasks }) {
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newTask = {
      description,
      completed: false,
      id: Date.now(),
    };

    onAddTasks(newTask);

    setDescription('');
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you want to do 🤓 ?</h3>
      <input
        type='text'
        placeholder='Task...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );
}
