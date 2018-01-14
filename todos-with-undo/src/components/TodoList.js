import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
  //todosをTodo componentに置き換える
  <ul>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList