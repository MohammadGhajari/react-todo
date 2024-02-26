import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import "../css/app.css";

type todoType = { num: number; text: string; date: string; status: string; };

interface entry {
    setToDoes: (todos: todoType[]) => void;
    todos: todoType[];
}


const AddToDo: React.FC<entry> = ({setToDoes, todos}) => {

    const [value, setValue] = useState("");


    function handleAdd () {
        if(value) {
            setToDoes([...todos, {num: todos.length + 1, text: value, date: '234', status: "incomplete"}]);
            setValue("");
        }
        
    }

    return <div className='input-container'>
        <input  value={value}  onChange={(e) => setValue(e.target.value)}  type="text" placeholder='Add your task...' />
        <button onClick={handleAdd} className='add-todo-btn'><IoIosAddCircleOutline /></button>
    </div>
}

export default AddToDo;