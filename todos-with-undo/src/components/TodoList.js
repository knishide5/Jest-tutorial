import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => (
  //todosをTodo componentに置き換える
  <ul>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )}
  </ul>
)

export default TodoList