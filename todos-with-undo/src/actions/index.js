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