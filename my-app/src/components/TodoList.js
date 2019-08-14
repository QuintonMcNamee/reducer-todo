import React, { useState, useReducer } from 'react';

// reducers
import { initialState, todoListReducer } from '../reducers/todoListReducer';

const TodoList = () => {
  const [newItemText, setNewItemText] = useState();

  const [state, dispatch] = useReducer(todoListReducer, initialState);
  console.log(state);

  const handleChanges = e => {
    setNewItemText(e.target.value);
  };

  return (
    <div>
      <h1>
        {state.todos.map(item => (
          <>
            <div>
              {item.item}
            </div>
            <button
              onClick={() =>
                dispatch({ type: 'COMPLETE_ITEM', payload: item.id })
              }
            >
              Complete Item
            </button>
          </>
        ))}
      </h1>

      <br />

      <input
        className="item-input"
        type="text"
        name="newItemText"
        value={newItemText}
        onChange={handleChanges}
      />
      <button
        onClick={() => dispatch({ type: 'ADD_ITEM', payload: newItemText })}
      >new item</button>
    </div>
  );
};

export default TodoList;
