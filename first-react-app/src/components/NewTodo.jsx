import { useState } from "react";

export const NewTodo = () => {
    const [Todo, setTodo] = useState("");

    return(
        <input onChange={setTodo}></input>
    )
};

