import React, { ReactEventHandler, useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import "../css/app.css";

type todoType = { num: number; text: string; date: string; status: string; };

interface entry {
    setToDoes: (todos: todoType[]) => void;
    todos: todoType[];
}


const AddToDo: React.FC<entry> = ({setToDoes, todos}) => {

    const [value, setValue] = useState("");
    const date = new Date();

    function handleClick () {
        if(value) {
            setToDoes([...todos, {num: todos.length + 1, text: value, date: date.toString().split(' ')[1] + " " + date.toString().split(' ')[2], status: "incomplete"}]);
            setValue("");
        }
    }

    function handleKeyDown (e: Event) {
        if(e.key === 'Enter') {
            if(value) {
                setToDoes([...todos, {num: todos.length + 1, text: value, date: date.toString().split(' ')[1] + " " + date.toString().split(' ')[2], status: "incomplete"}]);
                setValue("");
            }
        }
    }


    return <div className='input-container'>
        <input  onKeyDown={handleKeyDown} value={value}  onChange={(e) => setValue(e.target.value)}  type="text" placeholder='Add your task...' />
        <button onClick={handleClick} className='add-todo-btn'><IoIosAddCircleOutline /></button>
    </div>
}

export default AddToDo;