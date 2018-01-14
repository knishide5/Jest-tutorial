import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index';

// buttonをクリックするとstoreにinputのvalueをactionにこめてdispatch
// なぜdispatch関数だけ渡ってくるのか調べる
// => connect()してるため
let AddTodo = (props) => {
  let input
  return (
    <div>
      <input ref={(node) => { input = node }} />
      <button onClick={() => {
        props.dispatch(addTodo(input.value))
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo