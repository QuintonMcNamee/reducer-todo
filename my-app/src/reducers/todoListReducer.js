export const initialState = {
  todos:[
    {
      item: 'Learn about reducers',
      completed: false,
      editing: false,
      id: 3892987589
    },
    {
      item: 'Do reducers project',
      completed: false,
      editing: false,
      id: 3892987590
    },
    {
      item: 'Celebrate',
      completed: false,
      editing: false,
      id: 3892987591
    }
  ],
  newTodo:
    {
      item: '',
      completed: false,
      editing: false,
      id: new Date()
    }
}

export const todoListReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EDITING':
      return {
        ...state,
        editing: !state.todos.editing
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        item: action.payload,
        editing: !state.todos.editing
      };
    default:
      return state;
  }
};
