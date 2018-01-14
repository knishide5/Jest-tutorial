import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from './AddTodo';

const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
  </div>
)

export default App