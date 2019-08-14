import React, { useState } from 'react';

function TodoForm() {
  const [user, setUser] = useState({ item: '', completed: false, id: new Date() });

  const handleItemChange = event => {
    setUser({...user, item: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.item);
    console.log(user.completed);
    console.log(user.id);
  };

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Add Todo Item:
          <input
            type="text"
            name="item"
            onChange={event => handleItemChange(event)}
          />
        </label>
        <button>Add</button>
      </form>
    </div>
  )
}
export default TodoForm;
