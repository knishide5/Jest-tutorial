import { connect } from 'react-redux'
import TodoList from "../components/TodoList";
import { toggleTodo } from '../actions/index';

const mapStateProps = (state) => {
  return { todos: state.todos }
}

const mapDispatchProps = (dispatch) => {
  return {
    onTodoClick: (id) => {dispatch(toggleTodo(id))}
  }
}

const VisibleTodoList = connect(mapStateProps, mapDispatchProps)(TodoList)

export default VisibleTodoList