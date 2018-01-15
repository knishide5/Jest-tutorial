// actionCreatorは純粋な関数なのだ
// actionを発行するだけ
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export const setVisibleFilter =  (filter) => {
  return {
    type: 'SET_VISIBLE_FILTER',
    filter
  }
}