export const initialState = {
  todos:[
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Do reducers project',
      completed: false,
      id: 3892987590
    },
    {
      item: 'Celebrate',
      completed: false,
      id: 3892987591
    }
  ]
}

export const todoListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = {
        item: action.payload,
        completed: false,
        id: new Date()
      }
      return {
        ...state,
        todos: [...state.todos, newItem]
      };
    case 'COMPLETE_ITEM':
      const completedItems = state.todos.map(item => {
        if(item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
      return {
        ...state,
        todos: completedItems
      };
    default:
      return state;
  }
};
