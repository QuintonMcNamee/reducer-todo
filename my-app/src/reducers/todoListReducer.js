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
      // completedItems.map(item => {
      //   if(item.id === action.payload) {
      //     document.getElementById(item.id).classList.toggle('todo-list-item-true');
      //     console.log(action.payload);
      //     document.getElementById(item.id*2).classList.toggle('button-true');
      //   }
      // })
      return {
        ...state,
        todos: completedItems
      };
    case 'CLEAR_ITEMS':
      // console.log(document.querySelectorAll('.todo-list-item-true'));
      // let nodeList = document.querySelectorAll('.todo-list-item-true');
      // console.log(Array.prototype.slice.call(nodeList));
      // let arr = Array.prototype.slice.call(nodeList);
      // arr.map(item => {
      //   item.classList.add('invisible');
      // })
      // let buttonTrue = document.querySelectorAll('.button-true');
      // let arrButtonTrue = Array.prototype.slice.call(buttonTrue);
      // arrButtonTrue.map(item => {
      //   item.classList.add('invisible');
      // })

      let newArr = state.todos.filter(item => item.completed === false)
      return {
        ...state,
        todos: newArr
      };
    default:
      return state;
  }
};
