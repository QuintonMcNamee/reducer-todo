import React, { useState, useReducer } from 'react';

// reducers
import { initialState, todoListReducer } from '../reducers/todoListReducer';

const TodoList = () => {
  const [newTodoListText, setNewTodoListText] = useState();

  const [state, dispatch] = useReducer(todoListReducer, initialState);
  console.log(state);

  return (
    <div>
      {state.map(item => <div>{item.item}</div>)}
    </div>
  )
}

export default TodoList;
