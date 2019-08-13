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


    <div>
      {!state.editing ? (
        <h1>
          {state.todos.map(item => (
            <>
            <div>
              {item.item}
            </div>
        <button
          onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}
        >new item</button>
        </>
        ))}
      </h1>
    ) : (
      <div>
        <input
          className="item-input"
          type="text"
          name="newItemText"
          value={newItemText}
          onChange={handleChanges}
        />
        <button
          onClick={() =>
            dispatch({ type: 'UPDATE_ITEM', payload: newItemText })
          }
        >
          Update Item
        </button>
      </div>
    )}
    </div>
  </div>
  );
};

export default TodoList;
