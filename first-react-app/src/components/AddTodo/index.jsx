/**AddTodo */

import React from "react";

export const AddTodo = (props) => {
    const {addInputValue,onChangeAddInputValue,handleAddTodo} = props
    return(
        <>
        <h2 className="add-title">ADD Todo</h2>
              <input 
              className='new-todo' 
              type='text' 
              value={addInputValue} 
              onChange={onChangeAddInputValue}
              onKeyDown={handleAddTodo}
              placeholder='New Todo'>
              </input>
        </>
    )
}