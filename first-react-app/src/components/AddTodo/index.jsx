/**AddTodo */

import React from "react";
import "./style.css";
import { SearchWordTodo } from "../SearchedList";

export const AddTodo = ({addInputValue,onChangeAddInputValue,handleAddTodo}) => (
    <>
        <h2 className="add-title">ADD Todo</h2>
        < SearchWordTodo
            type='text' 
            searchKeyword={addInputValue} 
            handleChangeSearchKeyword={onChangeAddInputValue}
            handleKeyDownSearch={handleAddTodo}
            placeholder={'New Todo'}
        />
    </>
)