import { connect } from 'react-redux'
import TodoList from "../components/TodoList";

const mapStateProps = (state) => {
  return { todos: state.todos }
}

const VisibleTodoList = connect(mapStateProps)(TodoList)

export default VisibleTodoList